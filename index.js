
//Calculator program

const display = document.getElementById('display');


function appendToDisplay(input)
{
    
    display.value = display.value + input;


}


function clearDisplay()

{

    display.value = '';



}


function calculate()
{

    try
    {

    display.value = eval(display.value);
    //eval() fonksiyonu bir ifadeyi değerlendirmek için kullanılır.
    }

    catch(error)

    {
        
        display.value = 'Hata';
    }
}