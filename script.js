document.addEventListener('DOMContentLoaded', () => {
  const pdfInput = document.getElementById('pdfInput');
  const convertButton = document.getElementById('convertButton');
  const downloadLink = document.getElementById('downloadLink');

  convertButton.addEventListener('click', async () => {
    const file = pdfInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);

      try {
        const response = await fetch('https://pdf2pptx.com/api/convert', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          downloadLink.href = data.pptxFile;
          downloadLink.style.display = 'block';
        } else {
          console.error('PPT conversion failed:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});
