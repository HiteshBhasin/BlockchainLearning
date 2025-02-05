
// this is the type of baverage
public class concreteBaverageClass extends  baverage {
// we declared discription in parent abstract class and initialise the variable in child clss. 
    public concreteBaverageClass(){
        discription = "Espresso";
    }
    @Override
    public double cost() {
       return 1.99;
    }
    
}
