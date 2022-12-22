/*
DESCRIPTION:

Write a function that when given a URL as a string, parses out just the 
domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"    
*/

// My solution:

function domainName(url){
    let firstStep = url.split(/[\/+\/]|[.]/);
    for (let i = 0; i < firstStep.length; i++){
        if (firstStep[i] !== "http:" && firstStep[i] !== "https:" && firstStep[i] !== "www" && firstStep[i] !== ""){
        return firstStep[i];
        }
    }
}

// A more concise way (not mine):

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};