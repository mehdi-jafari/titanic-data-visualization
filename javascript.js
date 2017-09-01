    function generate_distribution_chart(data, contanier_name, x_axis, x_title, y_axis, y_title, title, x_order_rules ){
      var margin = 40
      scaler = 0.5
      width = 800 * scaler,
      height = 600 * scaler;  

       var svg = d3.select(contanier_name)
      .append("svg")
      .attr("width", width + margin)
      .attr("height", height + margin)
      .append('g')
      .attr('class','chart')      
      var myChart = new dimple.chart(svg, data);
      var x = myChart.addCategoryAxis("x",[x_axis]); 
      var y = myChart.addMeasureAxis('y', y_axis);
      x.title = title;
      x.addOrderRule(x_order_rules);
      y.title = title;
      y.showGridlines = false;
      var mySeries = myChart.addSeries(null, dimple.plot.bar);
      mySeries.aggregate = dimple.aggregateMethod.count;
      myChart.draw();
      svg.append("text").attr("x", myChart._xPixels() + myChart._widthPixels() / 2).attr("y", myChart._yPixels() - 20)
      .style("text-anchor", "middle").style("font-family", "sans-serif")
      .style("font-weight", "bold").text(title);
    }

    function draw_distributions(data) {
      /*D3.js setup code*/

      "use strict";
      generate_distribution_chart(data,"#distribution","Sex", "Gender", "PassengerId", "Number of Passengers", "Gender Distribution", ['male', "female"])
      generate_distribution_chart(data,"#distribution","socioeconomic", "socio-economic Status", "PassengerId", "Number of Passengers", "Socio-economic Distribution", ['Lower', "Middle", "Upper"])
      generate_distribution_chart(data,"#distribution","AgeCategory", "Age Category", "PassengerId", "Number of Passengers", "Age Distribution", ['Children', "Youth", "Adults", "Seniors", "UnKnown"])
      generate_distribution_chart(data,"#distribution","WithFamily", "Traveling With Family Status", "PassengerId", "Number of Passengers", "Traveling With Family Status Distribution", ['With Family', 'Alone']) 
    };