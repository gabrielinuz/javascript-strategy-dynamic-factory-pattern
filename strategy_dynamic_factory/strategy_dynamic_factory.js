/**
* Copyright (c) 2016 Gabriel Ferreira <gabrielinuz@gmail.com>. All rights reserved. 
* This file is a example of strategy pattern, dynamic factory pattern and prototypal inheritance.
* Released under the GPL3 license
* https://opensource.org/licenses/GPL-3.0
**/

/**
* AbstracStrategy
*/
function AbstracStrategy() 
{  
  function execute(){}
}

/**
* AbstracStrategy2
*/
function AbstracStrategy2() 
{  
  function execute2(){}
}

/***************************************************************************************************/

/**
* Constructor function
* @extends {AbstracStrategy}
*/
function StrategyA() {}

/**
* Javascript prototype inheritance
*/
StrategyA.prototype = new AbstracStrategy;

/**
* Implement the AbstracStrategy interface.
*/
StrategyA.prototype.execute = function()
{
    console.log('Called ConcreteStrategyA execute method.');
}

/***************************************************************************************************/

/**
* Constructor function
* @extends {AbstracStrategy}
*/
function StrategyB() {}

/**
* Javascript prototype inheritance
*/
StrategyB.prototype = new AbstracStrategy;

/**
* Implement the AbstracStrategy interface.
*/
StrategyB.prototype.execute = function()
{
    console.log('Called ConcreteStrategyB execute method.');
}

/***************************************************************************************************/

/**
* Constructor function
* @extends {AbstracStrategy2}
*/
function StrategyC() {}

/**
* Javascript prototype inheritance
*/
StrategyC.prototype = new AbstracStrategy2;

/**
* Implement the AbstracStrategy2 interface.
*/
StrategyC.prototype.execute2 = function()
{
    console.log('Called ConcreteStrategyC execute method.');
}

/***************************************************************************************************/

/**
* Context constructor:
*/
function Context(strategy)
{
    if( strategy instanceof AbstracStrategy ) this._strategy = strategy;
}

Context.prototype.update = function()
{
    this._strategy.execute();
}


/***************************************************************************************************/

/**
* A Dynamic Strategy Factory:
*/
function DynamicStrategyFactory(){}

DynamicStrategyFactory.prototype.create = function(id)
{
    var strategyName = "Strategy" + id;
    var strategy;
    try
    {
        strategy = eval('new ' + strategyName + '()');
    }
    catch(err) 
    {
        console.log('Null Strategy: '+err.message);
    }

    if( strategy instanceof AbstracStrategy ){ var context = new Context(strategy); context.update(); }
    else { console.log( strategyName + ' not is a prototype of AbstracStrategy.' ); }
}

/***************************************************************************************************/
/**
* To create!!!
*/
var factory = new DynamicStrategyFactory();

factory.create('A');
factory.create('B');
factory.create('C');
factory.create('D');