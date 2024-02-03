// The javaScript switch Statement
function showResult(){
    const mark=document.getElementById("marks").value
    switch(true){
        case(mark>=80 && mark<=100):
            document.getElementById("red").innerHTML="Grade = A+<br>Point = 5.0";
        break;
        case(mark>=70 && mark <=79):
            document.getElementById("red").innerHTML="Grade = A<br>Point = 4.0";
        break;
        case(mark>=60 && mark<=69):
            document.getElementById("red").innerHTML="Grade = A-<br>Point = 3.0";
        break;
        case(mark>=50 && mark<=59):
            document.getElementById("red").innerHTML="Grade = B<br>Point = 3.50";
        break;
        case(mark>=40 && mark<=49):
            document.getElementById("red").innerHTML="Grade = C<br>Point = 2.0";
        break;
        case(mark>=33 && mark<=39):
            document.getElementById("red").innerHTML="Grade = D<br>Point = 1.0";
        break;
        case(mark>=1 && mark<=32):
            document.getElementById("red").innerHTML="Grade = F<br>Point = 0.0";
        break;
        default:
            document.getElementById("red").innerHTML="Oops Erro";
        break;
    };
};