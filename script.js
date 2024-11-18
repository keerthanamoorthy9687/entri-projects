//reference of the quotes generator
let quotes=document.getElementById("quotes-text");
let author=document.getElementById("quotes-author");
let newQuoteBtn =document.getElementById("new-quotes");

// Fetch and display a new quote

async function getQuotes() {
    try{
        const response=await fetch ('https://dummyjson.com/quotes/random');
        let data=await response.json()
        console.log("response of the data",data)
        quotes.textContent=`"${data.quote}"`
        author.textContent=`----${data.author||'unknown'}`

    }catch(error){
        console.error('Error fetching the quote:', error);
        quoteText.textContent = 'Oops! Could not fetch a quote. Please try again.';
        authorText.textContent = '';

    }
   
    
}
// Add event listener to the button
newQuoteBtn.addEventListener('click',getQuotes)

// Fetch the initial quote on page load
getQuotes()