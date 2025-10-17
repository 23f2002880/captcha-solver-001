# 🔐 CAPTCHA Solver

An AI-powered web application that automatically solves text-based CAPTCHA images using advanced OCR (Optical Character Recognition) technology. Built with vanilla JavaScript and powered by Tesseract.js, this solution provides fast and accurate CAPTCHA text extraction within seconds.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Demo-Live-blue.svg)](https://yourusername.github.io/captcha-solver-001/)

## ✨ Features

- **🚀 Fast Processing**: Solves CAPTCHAs within 15 seconds
- **🌐 URL Parameter Support**: Pass any CAPTCHA image URL via query string
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎯 High Accuracy**: Utilizes Tesseract.js OCR engine for reliable text extraction
- **📋 Copy to Clipboard**: One-click copying of solved CAPTCHA text
- **🎨 Modern UI**: Clean, professional interface with real-time processing feedback
- **⚡ No Backend Required**: Fully static application, hostable on GitHub Pages
- **🔒 Privacy-Focused**: All processing happens client-side in the browser

## 🎯 Use Cases

- Automated testing and QA workflows
- Accessibility tools for vision-impaired users
- Research and development of CAPTCHA systems
- Educational purposes and demonstrations

## 🚀 Quick Start

### Live Demo

Visit the live application: [CAPTCHA Solver Demo](https://yourusername.github.io/captcha-solver-001/)

### Usage

**Option 1: Default Sample**
```
https://yourusername.github.io/captcha-solver-001/
```

**Option 2: Custom CAPTCHA URL**
```
https://yourusername.github.io/captcha-solver-001/?url=https://example.com/captcha.png
```

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/captcha-solver-001.git
   cd captcha-solver-001
   ```

2. **Serve locally**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js:
   ```bash
   npx serve
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
captcha-solver-001/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Core application logic
├── README.md           # Project documentation
├── LICENSE             # MIT License
└── assets/
    └── round_1/
        └── sample.png  # Default sample CAPTCHA image
```

## 🔧 How It Works

1. **Image Loading**: The application loads the CAPTCHA image from either the URL parameter or the default sample
2. **OCR Processing**: Tesseract.js analyzes the image and extracts text using machine learning algorithms
3. **Text Cleaning**: The extracted text is processed to remove artifacts and formatting issues
4. **Display Results**: The solved CAPTCHA text is displayed with a copy-to-clipboard function
5. **Performance Tracking**: Processing time is tracked and displayed to the user

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript (ES6+)**: Core application logic
- **Tesseract.js**: OCR engine for text extraction
- **GitHub Pages**: Static site hosting

## 📋 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🎨 Customization

### Modify OCR Settings

Edit `script.js` to adjust Tesseract configuration:

```javascript
Tesseract.recognize(
    imageUrl,
    'eng',  // Language (change to support other languages)
    {
        // Add custom configuration here
    }
)
```

### Change Theme

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --background: #0f172a;
    /* Customize colors */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This tool is intended for educational and accessibility purposes only. Please ensure you comply with the terms of service of any website or application when using automated CAPTCHA solving. The authors are not responsible for any misuse of this software.

## 🙏 Acknowledgments

- [Tesseract.js](https://tesseract.projectnaptha.com/) - OCR engine
- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) - Original OCR project
- Community contributors and testers

## 📧 Contact

For questions, suggestions, or issues, please open an issue on GitHub or contact the maintainer.

---

**Made with ❤️ for the open-source community**
