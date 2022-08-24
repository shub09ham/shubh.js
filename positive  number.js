import java.util.*;

public class abbreviation {
 static boolean check(int a)
 {
  double sq=Math.sqrt(a);
  return (sq - Math.floor(sq)) == 0;
 }
 
 
 public static void main(String[] args) {
  Scanner s=new Scanner(System.in);
  int num=s.nextInt();
  double sq=Math.sqrt(num);
  for(int i=1;i<=num/2;i++)
  {
   int a=(int)Math.pow(i, 2);
   
   if(check(i) && check(num-i))
   {
    System.out.println((int)Math.sqrt(i)+" "+(int)Math.sqrt((num-i)));
    
   }
   System.out.println();
   
  }
 }
}

