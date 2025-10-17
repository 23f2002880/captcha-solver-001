# Testing Guide - CAPTCHA Solver

## Manual Testing Steps

### 1. Test Default PNG Sample
1. Open the application in a browser: `http://localhost:8000` or your deployment URL
2. Verify PNG sample loads automatically on page load
3. Verify format info shows "Format: PNG"
4. Wait for OCR processing to complete (should be within 15 seconds)
5. Verify the solved text appears
6. Click "Copy to Clipboard" button and verify it changes to "✓ Copied!"
7. Paste in a text editor to verify the text was copied

### 2. Test SVG Sample
1. Click the "Load SVG Sample" button
2. Verify the SVG image loads in the display area
3. Verify format info shows "Format: SVG"
4. Wait for OCR processing (should complete within 15 seconds)
5. Verify the solved text appears
6. Test the copy functionality

### 3. Test PNG Sample Button
1. Click the "Load PNG Sample" button
2. Verify PNG image reloads
3. Verify format info updates to "Format: PNG"
4. Verify OCR processing completes successfully

### 4. Test URL Parameters - PNG
1. Navigate to: `?url=assets/round_1/sample.png`
2. Verify PNG loads from URL parameter
3. Verify format detection and OCR processing work

### 5. Test URL Parameters - SVG
1. Navigate to: `?url=assets/round_2/sample.svg`
2. Verify SVG loads from URL parameter
3. Verify format detection shows SVG
4. Verify OCR processing completes

### 6. Test External URL (if available)
1. Navigate to: `?url=https://example.com/captcha.png` (use a real URL)
2. Verify external image loads via CORS
3. Verify OCR processing works with external images

### 7. Test Responsive Design
1. Resize browser window to mobile size (< 768px)
2. Verify layout adjusts appropriately
3. Verify sample cards stack vertically
4. Verify all buttons remain accessible

### 8. Test Timer Functionality
1. Load any sample
2. Verify timer starts at "Time: 0s"
3. Verify timer updates during processing
4. Verify final message shows "Completed in Xs"

### 9. Test Error Handling
1. Navigate to: `?url=https://invalid-url-test.com/nonexistent.png`
2. Verify error message displays
3. Verify application doesn't crash

### 10. Test Backward Compatibility
1. Verify old PNG samples still work
2. Verify all original features are intact
3. Verify no regressions in existing functionality

## Expected Results

### Performance Benchmarks
- Image loading: < 2 seconds
- OCR processing: < 15 seconds
- Total time from load to result: < 20 seconds

### Visual Checks
- ✓ Clean, modern interface
- ✓ Consistent color scheme
- ✓ Smooth animations and transitions
- ✓ Readable text at all sizes
- ✓ Professional appearance

### Functional Checks
- ✓ All buttons respond to clicks
- ✓ Images load correctly
- ✓ Format detection works for all types
- ✓ OCR produces text output
- ✓ Copy to clipboard works
- ✓ Timer displays accurately
- ✓ Sample buttons switch images
- ✓ URL parameters override defaults

## Browser Compatibility Testing

Test in the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Known Limitations

1. SVG files that are actually PNG (like current sample.svg) will display but format detection relies on file extension
2. External URLs must allow CORS for image loading
3. Very complex CAPTCHAs may have lower accuracy
4. Processing time depends on image complexity and device performance

## Troubleshooting

### Image Won't Load
- Check CORS settings for external URLs
- Verify file paths are correct
- Check browser console for errors

### OCR Not Producing Results
- Verify Tesseract.js loads correctly from CDN
- Check browser console for JavaScript errors
- Ensure image is clear and readable

### Buttons Not Working
- Check browser console for JavaScript errors
- Verify all event listeners are set up
- Clear browser cache and reload

## Success Criteria

All tests pass when:
1. Both PNG and SVG samples load and process correctly
2. Format detection identifies image types
3. OCR completes within 15 seconds
4. URL parameters work for both formats
5. All buttons function as expected
6. Responsive design works on mobile
7. Copy to clipboard functions correctly
8. No console errors appear
9. Backward compatibility maintained
10. Professional UI/UX experience
