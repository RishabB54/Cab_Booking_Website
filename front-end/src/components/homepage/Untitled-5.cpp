// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std ;  
int gcd(int a, int b)
{
    if (a == 0)
        return b;
    if (b == 0)
        return a;
    int k;
    for (k = 0; ((a | b) & 1) == 0; ++k)
    {
        a >>= 1;
        b >>= 1;
    }
    while ((a & 1) == 0)
        a >>= 1;
    do
    {
        while ((b & 1) == 0)
            b >>= 1;
        if (a > b)
            swap(a, b); 
        b = (b - a);
    }while (b != 0);
    return a << k;
}
int main(){ 
    int n , q, k ;  
    cout<< "input first line"<<endl;
    cin >> n>> q>> k ;  
    int numer[n];
    for(int i = 0 ; i< n ; i++){
        cin >> numer[i];
    }  
    int query ;
    int l,r;
    for(int so = 0 ; so <q ; so++){
    
        cin >> query; 
        
            if(query==1){
                int index; 
                int newval; 
                cin >>index>>newval;
                numer[index]  = newval;
                cout << "Value at index "<<index<< " is updated to new value "<<numer[index]<<endl;
            } 
            if(query == 2){
                cin>>l>>r; 
                int gcd1 = numer[l]; 
                int val = numer[l];
                for(int x1 = l ; x1<=r;x1++ ){ 
                    if(gcd1 != numer[x1] and numer[x1]!= val ){
                    gcd1 = gcd(gcd1,numer[x1]);  
                    val = numer[x1];
                    }
                } 
                cout<<"The gcd of list is "<<gcd1<<endl;
            }
            
            
    
        
        
    }
} 