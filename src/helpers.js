export function copySelectedEmoji(imageSpinner = document.querySelector('.imageSpinner')){
    navigator.clipboard.writeText(imageSpinner.textContent);
}