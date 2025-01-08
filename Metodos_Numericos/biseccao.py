def funcao(x):
    return x*x +(3*x) -4



def biseccao(xl, xu, tol,maxiteracao):
    resposta = 1.0
    if(xu*xl) > 0:
        return 0
    else:
        print(f"resposta: {resposta}")
        
        i = 0
        xm = (xl + xu)/2
        erro = abs((resposta - xm)/resposta)
        funcao_xm = funcao(xm)
        funcao_xl = funcao(xl)
        funcao_xu = funcao(xu)
        print(f"Valor previsto antes: {xm}")
        print(f"função de valor previsto: {funcao(xm)}")
        print(f"função de valor xl antes: {funcao(xl)}")
        print(f"função de valor xu antes: {funcao(xu)}\n")
        while(erro > tol)and(i < maxiteracao):
            i += 1
            print(f"valor maximo do intervalo Entrou no while: {xu}")
            print(f"valor minimo do intervalo: {xl}\n")
            
            if(funcao(xm) * funcao(xl)) > 0:
                xl = xm
                print(f"valor maximo do intervalo Opção 1: {xu}")
                print(f"valor minimo do intervalo: {xl}\n")
            else:
                xu = xm
                print(f"valor maximo do intervalo Opção 2: {xu}")
                print(f"valor minimo do intervalo: {xl}\n")
            xm = (xl + xu)/2
            erro = abs((resposta - xm)/resposta)
            print(f"Iteracao: {i}")
            print(f"erro: {erro}")
            print(f"valor maximo do intervalo: {xu}")
            print(f"valor minimo do intervalo: {xl}")
            print(f"Valor previsto: {xm}")
            print(f"função de valor previsto: {funcao(xm)}\n")
            
            
def main():
    xmaior = 2.0
    xmenor = -1.0
    tolerancia = 0.00001
    maxiteracao = 100
    biseccao(xmenor,xmaior,tolerancia,maxiteracao)
    
main()
            
            
    