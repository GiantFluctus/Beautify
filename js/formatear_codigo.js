function openTab(event, tabId) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    const tabLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function formatCode() {
    const inputHTML = document.getElementById('inputHTML').value;
    const inputCSS = document.getElementById('inputCSS').value;
    const inputJS = document.getElementById('inputJS').value;

    const formattedHTML = html_beautify(inputHTML);
    const formattedCSS = css_beautify(inputCSS);
    const formattedJS = js_beautify(inputJS);

    document.getElementById('outputHTML').textContent = formattedHTML;
    document.getElementById('outputCSS').textContent = formattedCSS;
    document.getElementById('outputJS').textContent = formattedJS;

    // Resaltar la sintaxis usando Prism.js
    Prism.highlightAll();
}

function selectAllOutput() {
    const activeOutput = document.querySelector('.tab-content.active .output code');
    if (activeOutput) {
        const range = document.createRange();
        range.selectNodeContents(activeOutput);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

function copyOutput() {
    const activeOutput = document.querySelector('.tab-content.active .output code');
    if (activeOutput) {
        const range = document.createRange();
        range.selectNodeContents(activeOutput);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        showMessage('Código copiado al portapapeles.');
    }
}

function saveOutput() {
    const activeOutput = document.querySelector('.tab-content.active .output code');
    if (activeOutput) {
        const blob = new Blob([activeOutput.innerText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'codigo_formateado.txt';
        link.click();
    }
}

function clearCode() {
    const activeTextarea = document.querySelector('.tab-content.active textarea');
    const activeOutput = document.querySelector('.tab-content.active .output code');
    if (activeTextarea && activeOutput) {
        activeTextarea.value = '';
        activeOutput.innerText = '';
    }
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.innerText = '';
        messageDiv.style.display = 'none';
    }, 3000);
}

// Inicializa la primera pestaña como visible
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-link').click();
});
