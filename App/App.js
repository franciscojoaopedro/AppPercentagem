const valorPercentagem=document.querySelector('.numberValor1')
const valorAtual=document.querySelector('.numberValor2')
const btnCalcular=document.querySelector('.btnCalcular')
const btnLimparCampos=document.querySelector('.btnLimparCampos')
const resultadoTelaH3=document.querySelector('.resultado')


const calcularPercentual=(percentagem,valor)=>{
    if((percentagem==NaN )|| (valor==NaN)){
        console.log('ysgygsygsg')
       return ;
        //return resultadoTelaH3.textContent=`DDD`
     }
   return (percentagem/100)*valor
};
const App=()=>{
    const Calcular=(event)=>{
        const percentagem=Number(valorPercentagem.value);
        const valorDeparaPercentagem=Number(valorAtual.value);
        console.log(percentagem,valorDeparaPercentagem)
            const resultadoPercentua=  calcularPercentual(percentagem,valorDeparaPercentagem)
            const resultadoTelaString=  resultadoPercentua.toString()
            if(resultadoTelaString.includes('.')){
                resultadoTelaH3.textContent= `${Number(resultadoTelaString).toFixed(2)}`
            }
            else{
                resultadoTelaH3.textContent=`${resultadoPercentua}`
            }
            
    }
    const LimparCampusDeEntrada=()=>{
        setTimeout(()=>{
            valorAtual.value="";
        valorPercentagem.value="";
        resultadoTelaH3.textContent=''
        },500)
    }
    btnLimparCampos.addEventListener('click',LimparCampusDeEntrada)
    btnCalcular.addEventListener('click',Calcular)
}
App()