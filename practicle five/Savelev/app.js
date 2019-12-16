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


}

/**
 * Отвечвает за учет бюджета
 * @class
 */
class BudgetController {


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








