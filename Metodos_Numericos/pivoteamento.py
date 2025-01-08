import numpy

def eliminacao_gauss(matriz_a,matriz_b):
    
    #Confere se a matriz não é quadrada
    if matriz_a[0].shape != matriz_a[1].shape:
         print("Nao é quadrada")
         return 0
    #matriz.shape[0] e matriz.shape[1] retornam a qtd de elementos
    #que o vetor tiver. Matriz[0] sendo o vetor de linhas e
    #matriz[1] o vetor de colunas, logo comparamos a qtd de elementos
    #nas linhas se é igual a qtd de elementos nas colunas
    
    if matriz_b.shape[1] > 1 or matriz_b.shape[0] != matriz_a.shape[0]:
        print("matriz de termos independentes tem um numero incorreto de linhas ou colunas")
        print(matriz_a.shape)
        print(matriz_b.shape)
        return 0
    #Se a matriz b que é a coluna de termos independentes tiver mais de uma coluna
    #Ou tiver mais linhas que a matriz de parâmetros ela está errada
    
    n = len(matriz_b)
    m = n-1
    i = 0
    linha = "\n"
    x = numpy.zeros(n)
    
    #Cria uma mtraiz que concatena as matrizes de parâmetros com 
    #a matriz de termos independentes para formar a matriz aumentada
    
    matriz_aumentada = numpy.concatenate((matriz_a, matriz_b), axis=1, dtype=float) 
    #funcao do numpy que concatena a matriz_b sendo a ultima
    #coluna da matriz a e os valores sendo transformados para float
    
    print(f"A matriz aumentada é {linha}{matriz_aumentada}")
    
    #Fazendo a Eliminação de Gauss
    while i < n:
        if matriz_aumentada[i][i] == 0.0:#Devemos pivotear
            print("Nao da pra dividir por 0")
            return 0
        else:
            for j in range(i+1, n):
                fator = matriz_aumentada[j][i]/matriz_aumentada[i][i]
                matriz_aumentada[j] = matriz_aumentada[j] -(matriz_aumentada[i]*fator)
                print("\n" ,matriz_aumentada)
        i+=1
                
            
    
    

    
        
def main():
    mat = numpy.array([[2,2],[1,3]])
    mat2 = numpy.array([[5],[6]])
    eliminacao_gauss(mat, mat2)
    
main() 
    