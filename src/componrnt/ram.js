let url1= "https://images.unsplash.com/photo-1710788199174-847f04737b89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8";
let url2 = "https://plus.unsplash.com/premium_photo-1709993970156-ea21d305474b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
let url3 = "https://media.istockphoto.com/id/1191287571/photo/middle-aged-woman-cooling-herself-with-hand-fan-indoors.webp?b=1&s=170667a&w=0&k=20&c=Rh9xJS5RfXfbsFXaJQ8MFOfjjQWhwgn0TKyqjQGkY60=";
let url4= "https://plus.unsplash.com/premium_photo-1661297491323-ef16c1da1fec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwbGFkaWVzfGVufDB8fDB8fHww";
let url5= "https://media.istockphoto.com/id/1221200774/photo/woman-regulating-heating-temperature-with-a-smart-thermostat.webp?b=1&s=170667a&w=0&k=20&c=0X1f5g0Whzz8e5Hv05xG5zUyB-upZ4H2HemslfAWmh4=";
let url6="https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.jpg?s=612x612&w=0&k=20&c=pQXg4kpaEPun89o75w4qqJffZCYDO81XbjAAumSaLig=";
let url7 = "https://media.istockphoto.com/id/1392670888/photo/woman-felling-hot-during-summer-setting-her-thermostat.webp?b=1&s=170667a&w=0&k=20&c=d0jTrtUO7bTAkhVXiZgKs5jV2szQm5hWfTLl0TMy_-E=";
let url8= "https://media.istockphoto.com/id/495291758/photo/woman-using-water-bottle-to-cool-down.webp?b=1&s=170667a&w=0&k=20&c=VW_2KYWFu-cAv1egEqKR5pVmS0q995gx01fWuFwQnZI=";
let url9="https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.jpg?s=612x612&w=0&k=20&c=pQXg4kpaEPun89o75w4qqJffZCYDO81XbjAAumSaLig=";
let url10 ="https://plus.unsplash.com/premium_photo-1661337105814-ece9cf691363?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwbGFkaWVzfGVufDB8fDB8fHww";
let url11 = "https://media.istockphoto.com/id/1280464607/photo/hot-weather-in-india.jpg?s=612x612&w=0&k=20&c=VTxZCoKfQaZBgzpKstXnful3zRdGME_ZZwRBeuy5eqg=";
let url12 = "https://media.istockphoto.com/id/626999086/photo/woman-measuring-her-temperature.jpg?s=612x612&w=0&k=20&c=4wAaKyM_shKmEfV8ZcTmNy52lyRLY2-_AylphX0zwe8=";
let url13 = "https://media.istockphoto.com/id/1434103899/photo/woman-showering-under-water-jet.jpg?s=612x612&w=0&k=20&c=QFXUXmSN3_BL0JTm4-czxAgcg5xnKb6Ehf_9JwX4-Y0=";
let url14 = "https://media.istockphoto.com/id/1192627562/photo/woman-turned-on-fan-waving-her-hands-to-cool-herself.jpg?s=612x612&w=0&k=20&c=d5JNZNpE3FeU9u3kh2y1BjL7M07xH8GzB3ZyafcmaS0="

export let arr2 = [];

let value = ()=>{
    return 1200+Math.floor(Math.random()*1000);
}
let count = ()=> 3+Math.floor(Math.random()*10);

export let arr = [{url:[url1,url5,url6],qty:count()
,price:value()},{url:[url2,url7,url8],qty:count(),price:value()},
{url:[url3,url12,url13],qty:count(),price:value()},{url:[url4,url9,url10,url11],qty:count(),price:value()}];