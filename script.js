/*  problem-1
    একটা ডিসকাউন্ট ক্যালকুলেটর এর প্রাকটিস দিয়েছি। সেটা করো। যেখানে একটা প্রাইস লেখা থাকবে এবং একটা বাটন আছে। সেটাতে ক্লিক করলে প্রাইস ৩০% কমে যাবে। এইটার আরেকটু এডভান্সড ভার্সন হবে। 
    তুমি যেদিন Apply বাটনে ক্লিক করবে তখন যদি পাশের টেক্সট বক্স এ DOM লেখা থাকে তাহলে ডিসকাউন্ট কাজ করবে। প্রাইস ৩০% কমবে। আর যদি DOM না লিখে অন্য কিছু লিখে। যেমন ধরো dom বা drum বা অন্য কিছু। তাহলে ডিসকাউন্ট কাজ হবে না। 
 */

document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const textUpperCase = text.toUpperCase();
    const applyButton = document.getElementById('apply-button');
    if(textUpperCase === 'DOM'){
        applyButton.removeAttribute('disabled')
    }
    else if(textUpperCase !== 'DOM'){
        applyButton.setAttribute('disabled', true)
    }
    
})

document.getElementById('apply-button').addEventListener('click', function(){
    const textElement = document.getElementById('change-text');
    const textElementValue = textElement.innerText;
    const textElementNumber = parseFloat(textElementValue);
    const textElementAmount = textElementNumber * 30;
    const textElementRemainder = textElementAmount / 100;
    const textElementRemaining = textElementNumber - textElementRemainder;
    textElement.innerText = textElementRemaining;  
    const a = document.getElementById('input-field').value = '';
    if(a === ''){
        document.getElementById('apply-button').setAttribute('disabled', true)
    } else{
        document.getElementById('apply-button').removeAttribute('disabled')
    }
})

/*     গুগলে সার্চ দাও। জাভাস্ক্রিপ্ট ক্যালকুলেটর। দেখবে এক এক সাইটে এক এক রকমের। এক এক জন এক এক ভাবে কোড করছে। সেটা ব্যাপার না। তোমার যেভাবে ভালো লাগে। সেভাবে খুঁজে খুঁজে বুঝে বুঝে করো। চোখ বন্ধ করে না। বরং বুঝে বুঝে করো। ফিউচারে কাজে লাগবে। 
 */
const display = document.getElementById('display-numbers');
buttons = document.querySelectorAll('button');
let displayValue = '';

for(button of buttons){
    button.addEventListener('click', function(element){
        buttonText = element.target.innerText;
        if(buttonText === 'C'){
            displayValue = '';
            display.value = displayValue
        } 
        else if (buttonText === '='){
            display.value = eval(displayValue)
        }
        else{
            displayValue += buttonText;
            display.value = displayValue;
        }
    })
}