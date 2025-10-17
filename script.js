// CAPTCHA Solver - Main Script
(function() {
    'use strict';

    // DOM Elements
    const captchaImage = document.getElementById('captchaImage');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const processingIndicator = document.getElementById('processingIndicator');
    const resultText = document.getElementById('resultText');
    const errorMessage = document.getElementById('errorMessage');
    const copyButton = document.getElementById('copyButton');
    const timerElement = document.getElementById('timer');

    // State
    let startTime;
    let timerInterval;

    // Initialize
    init();

    function init() {
        const captchaUrl = getCaptchaUrl();
        loadCaptcha(captchaUrl);
        setupEventListeners();
    }

    function setupEventListeners() {
        copyButton.addEventListener('click', copyToClipboard);
    }

    function getCaptchaUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlParam = urlParams.get('url');
        
        // If URL parameter exists, use it; otherwise use default sample
        if (urlParam) {
            return urlParam;
        }
        
        // Default to sample image in assets
        return 'assets/round_1/sample.png';
    }

    function loadCaptcha(url) {
        loadingSpinner.style.display = 'flex';
        captchaImage.style.display = 'none';

        // Create a new image to test loading
        const img = new Image();
        
        img.onload = function() {
            captchaImage.src = url;
            captchaImage.classList.add('loaded');
            captchaImage.style.display = 'block';
            loadingSpinner.style.display = 'none';
            
            // Start solving the captcha
            solveCaptcha(url);
        };

        img.onerror = function() {
            loadingSpinner.style.display = 'none';
            showError('Failed to load CAPTCHA image. Please check the URL and try again.');
        };

        img.src = url;
    }

    function solveCaptcha(imageUrl) {
        // Reset UI
        processingIndicator.style.display = 'flex';
        resultText.classList.remove('show');
        errorMessage.classList.remove('show');
        copyButton.style.display = 'none';

        // Start timer
        startTime = Date.now();
        startTimer();

        // Initialize Tesseract worker with optimized settings
        Tesseract.recognize(
            imageUrl,
            'eng',
            {
                logger: function(m) {
                    // Optional: Log progress
                    if (m.status === 'recognizing text') {
                        console.log(`Progress: ${Math.round(m.progress * 100)}%`);
                    }
                }
            }
        ).then(function(result) {
            stopTimer();
            const solvedText = processCaptchaText(result.data.text);
            
            if (solvedText) {
                displayResult(solvedText);
            } else {
                showError('Could not extract text from CAPTCHA. Please try a different image.');
            }
        }).catch(function(error) {
            stopTimer();
            console.error('OCR Error:', error);
            showError('An error occurred while processing the CAPTCHA. Please try again.');
        });
    }

    function processCaptchaText(rawText) {
        // Clean up the extracted text
        // Remove whitespace, newlines, and special characters
        let cleaned = rawText.replace(/\s+/g, '').trim();
        
        // Remove common OCR artifacts
        cleaned = cleaned.replace(/[^a-zA-Z0-9]/g, '');
        
        // If the text is too long, it might be incorrectly recognized
        // CAPTCHAs are usually 4-8 characters
        if (cleaned.length > 12) {
            // Try to extract the most likely CAPTCHA text
            // Look for continuous alphanumeric sequences
            const matches = rawText.match(/[a-zA-Z0-9]{4,8}/g);
            if (matches && matches.length > 0) {
                cleaned = matches[0];
            }
        }
        
        return cleaned;
    }

    function displayResult(text) {
        processingIndicator.style.display = 'none';
        resultText.textContent = text;
        resultText.classList.add('show');
        copyButton.style.display = 'block';
        
        // Store the result for copying
        copyButton.dataset.text = text;
    }

    function showError(message) {
        processingIndicator.style.display = 'none';
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    }

    function startTimer() {
        timerInterval = setInterval(function() {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            timerElement.textContent = `Time: ${elapsed}s`;
        }, 100);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            const finalTime = Math.floor((Date.now() - startTime) / 1000);
            timerElement.textContent = `Completed in ${finalTime}s`;
        }
    }

    function copyToClipboard() {
        const text = copyButton.dataset.text;
        
        // Try modern clipboard API first
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopySuccess();
            }).catch(function() {
                // Fallback to older method
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            showCopySuccess();
        } catch (err) {
            console.error('Copy failed:', err);
        }
        
        document.body.removeChild(textarea);
    }

    function showCopySuccess() {
        const originalText = copyButton.textContent;
        copyButton.textContent = '✓ Copied!';
        copyButton.classList.add('copied');
        
        setTimeout(function() {
            copyButton.textContent = originalText;
            copyButton.classList.remove('copied');
        }, 2000);
    }
})();
