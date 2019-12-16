/**
 * Цель работы
 * 1) Создать приложение по учету бюджета на месяц
 * 2) Получить навыки применения классов в JavaScript
 * 
 * Задание
 * Нужно реализовать приложение так, чтобы функционал был разделен между тремя классами.
 * Обязанности классов:
 * - UIController отвечает за отрисовку и управляет DOM-документом.
 *      Предоставляет методы, с помощью которых другой объект может управлять DOM-документом.
 * - BudetController отвечает за подсчет и сохранение данных бюджета.
 *      Хранит в себе информацию о внесенных пользоваелем доходах и расходах.
 *      Предоставляет методы, с помощью которых другой объект может получать информацию о бюджете.
 * - GlobalController управляет всем ходом приложения. Говорит что и в какой последовательности делать объектам двух других классов.
*/  
/**
 * Отвечает за интервейс пользователя
 * @class
 */
class UIController {

    GetAllData(){
        let a=$(".add__type").val(),
            b=$(".add__description").val(),
            c=$(".add__value").val(),
            results=[a,b,c];
            return results;
        }


    AddField(result,number) {
    let stat = document.createElement('div');
    let btn= document.createElement("button");
    let value;
    btn.innerText=("Удалить")
    stat.innerText = result[1]+" "+result[2];
    if(result[0]==="inc"){
        $('.income__list').append(stat);
        $(stat).append(btn);
        $(btn).click(function(){
          number=$(".budget__value").text();
          value=number-result[2];
          $(this).parent().remove();
          $(".budget__value").text(value);

          let income=$(".budget__income--value").text();
        
          

          income-=result[2];
          $(".budget__income--value").text(income)
        })
        
    }
    if (result[0]==="exp"){
        $('.expenses__list').append(stat);
        $(stat).append(btn);
        $(btn).click(function(){
            number=$(".budget__value").text();
            value=parseInt(number)+result[2];
            $(this).parent().remove();
            $(".budget__value").text(value);

            let outcome=$(".budget__expenses--value").text();
        
            outcome-=result[2]
            $(".budget__expenses--value").text(outcome)
          })
        
    }
    
    
    }

    RemoveField(id){

        $("#"+id).remove();

    }
 
}
/**
 * Отвечвает за учет бюджета
 * @class
 */
class BudgetController {

    

    countBudjet(results){
        let value=$(".budget__value").text();
        value= parseInt(value),
        results[2]=parseInt(results[2]);
        
        if(results[0]==="inc"){

        value+=results[2];

        }
        if(results[0]==="exp"){

            value-=results[2];
        }
        $(".budget__value").text(value);
        return value;
    }

    countIncomeOutcome(results,value){
        let income=$(".budget__income--value").text(),outcome=$(".budget__expenses--value").text();
        
         income=parseInt(income),outcome=parseInt(outcome);
        if(results[0]==="inc"){
           income+=results[2]
           $(".budget__income--value").text(income);
           var persent = outcome  / value *100; 
           $(".budget__expenses--percentage").text(persent.toFixed(2));
            }
            if(results[0]==="exp"){
                
                console.log(outcome)
              outcome+=Math.abs(results[2]);
              $(".budget__expenses--value").text(outcome);
              
              var persent = outcome  / value *100; 
              $(".budget__expenses--percentage").text(persent.toFixed(2));
            }
         
        }
}


/**
 * Говорит как UIController И BudgetController взаимодействуют друг сдругом
 * @class
 */
class GloablController {

    /**
     * @type {UIController}
     * @property
     */
    uiController;

    /**
     * @type {BuddgetController}
     * @property
     */
    budgetController


    /**
     * 
     * @param {UIController} uiCtrl 
     * @param {BudgetController} budgetCtrl 
     */
    constructor (uiCtrl, budgetCtrl) {

        this.uiController = uiCtrl;
        this.budgetController = budgetCtrl;
    }

    
    
    
}
$( document ).ready(function() {
    let now = new Date();
    $(".budget__title--month").text(now);
    $('.add__btn').click(function () {
        let UI= new UIController(),
         BUDJ=new BudgetController(),
         z=UI.GetAllData(),
         result=BUDJ.countBudjet(z);
         BUDJ.countIncomeOutcome(z,result)
         UI.AddField(z,result);
         
     });

    

});
    






