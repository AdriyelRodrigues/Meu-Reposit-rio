function discriminante(a,b,c){
    let delta = b*b - (4*a*c);
    return delta;
}

function avalia_delta(a,b,c,delta){

    if (delta < 0){
        console.log("Não existem raízes reais para essa equação");
        return 0;
    }
    else if(delta == 0){
        let x1 = resposta1(a,b,c);
        console.log("A raíz da equação é " + x1 );
        return 0;
    }
    else{
        let x1 = resposta1(a,b,c);
        let x2 = resposta2(a,b,c);
        console.log("As raízes da equação são " + x1 + " e " + x2);
        return 0;
    }
}

function resposta1(a, b, c){
    let delta = discriminante(a,b,c);
    let x = (-b - (b*b - (4*a*c))**(1/2))/(2*a);
    return x;
}
function resposta2(a, b, c){
    let delta = discriminante(a,b,c);
    let x =  (-b + (b*b - (4*a*c))**(1/2))/(2*a);
    return x;
}
function main(){
    let a = [0,1,1,1], b = [1,5,-4,1], c = [1,6,4,1];
    for(i=0; i < a.length ; i++){
        if(a[i] == 0){
            console.log("Os parametros dados nao formam uma equacao de segundo grau"); 
        }

        else{
            let delta = discriminante(a[i], b[i], c[i]);
            let avalia = avalia_delta(a[i],b[i],c[i],delta);
        }
        
    }
    
    
    
}
main();

