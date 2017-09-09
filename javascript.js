     /** This function generates bar chart based on the paremters. 
     * @param {json} data - The data that need to be processesd.
     * @param {string} contanier_name - The containerName that charts will be generated in.
     * @param {string} x_axis - The variable name that will be used in X axis.
     * @param {string} x_title - Y axis title
     * @param {string} y_axis - The variable name that will be used in Y axis.
     * @param {string} y_title - Y axis title
     * @param {string} title - The ttitle of the chart.
     * @param {string[]} x_order_rules - The order of categories that should be used in ploting the bar chart .
     * @param {string} groupby - This variable is used to groupby each category based on this variable. defualt is Null. 
     * @param {boolean} show_legend - whether add legend to the chart
     * @param {string} use_pct - wether the Y axis will be measured and a proportional numerical axis will be created     
     */ 
    function generate_distribution_chart(data, contanier_name, x_axis, x_title, y_axis, y_title, title, x_order_rules, groupby, show_legend,use_pct ){
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
      if(use_pct === true)
        var y = myChart.addPctAxis("y",y_axis);
      else
        var y = myChart.addMeasureAxis('y', y_axis);
      
      x.title = x_title;
      x.addOrderRule(x_order_rules);
      y.title = y_title;
      y.showGridlines = false;
      var mySeries = myChart.addSeries(groupby, dimple.plot.bar);
      mySeries.aggregate = dimple.aggregateMethod.count;
      if(show_legend === true)
        myChart.addLegend(60, 60, 350, 20, "right");
      myChart.draw();
      svg.append("text").attr("x", myChart._xPixels() + myChart._widthPixels() / 2).attr("y", myChart._yPixels() - 20)
      .style("text-anchor", "middle").style("font-family", "sans-serif")
      .style("font-weight", "bold").text(title);
    }

    /** This function generates bar chart for all sections. 
     * @param {json} data - The data that need to be processesd.
     */
    function draw_distributions(data) {
     /*D3.js setup code*/      

     //generate the destibution for selected variables
      generate_distribution_chart(data,"#distribution","Sex", "Gender", "PassengerId", "Number of Passengers", "Gender Distribution", ['male', "female"]);
      generate_distribution_chart(data,"#distribution","socioeconomic", "socio-economic Status", "PassengerId", "Number of Passengers", "Socio-economic Distribution", ['Lower', "Middle", "Upper"]);
      generate_distribution_chart(data,"#distribution","AgeCategory", "Age Category", "PassengerId", "Number of Passengers", "Age Distribution", ['Children', "Youth", "Adults", "Seniors", "UnKnown"]);
      generate_distribution_chart(data,"#distribution","WithFamily", "Traveling With Family Status", "PassengerId", "Number of Passengers", "Traveling With Family Status Distribution", ['With Family', 'Alone']);

      //genaret grouped distribution by survival status for selected variables 
      generate_distribution_chart(data,"#grouped_distribution","Sex", "Gender", "PassengerId", "Number of Passengers", "Gender Distribution", ['male', "female"], "SurvivedFactor", true);
      generate_distribution_chart(data,"#grouped_distribution","socioeconomic", "socio-economic Status", "PassengerId", "Number of Passengers", "Socio-economic Distribution", ['Lower', "Middle", "Upper"], "SurvivedFactor", true);
      generate_distribution_chart(data,"#grouped_distribution","AgeCategory", "Age Category", "PassengerId", "Number of Passengers", "Age Distribution", ['Children', "Youth", "Adults", "Seniors", "UnKnown"], "SurvivedFactor", true);
      generate_distribution_chart(data,"#grouped_distribution","WithFamily", "Traveling With Family Status", "PassengerId", "Number of Passengers", "Traveling With Family Status Distribution", ['With Family', 'Alone'], "SurvivedFactor", true);

      //genaret grouped distribution by survival status in percentage for selected variables 
      generate_distribution_chart(data,"#pct_distribution","Sex", "Gender", "PassengerId", "Number of Passengers", "Gender Distribution", ['male', "female"], "SurvivedFactor", true, true);
      generate_distribution_chart(data,"#pct_distribution","socioeconomic", "socio-economic Status", "PassengerId", "Number of Passengers", "Socio-economic Distribution", ['Lower', "Middle", "Upper"], "SurvivedFactor", true, true);
      generate_distribution_chart(data,"#pct_distribution","AgeCategory", "Age Category", "PassengerId", "Number of Passengers", "Age Distribution", ['Children', "Youth", "Adults", "Seniors", "UnKnown"], "SurvivedFactor", true, true);
      generate_distribution_chart(data,"#pct_distribution","WithFamily", "Traveling With Family Status", "PassengerId", "Number of Passengers", "Traveling With Family Status Distribution", ['With Family', 'Alone'], "SurvivedFactor", true, true);
    
    };
