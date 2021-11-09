var dataSet = [10, 12, 15, 19, 20, 25, 16];
var colorSet = ['red', 'blue', 'green', 'pink', 'gray', 'black', 'brown'];


function horizontalBarChart() {

    var svgWidth = 500,
        svgHeight = 500,
        barWidth = svgWidth / d3.count(dataSet),
        barPadding = 10;


    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataSet)])
        .range([0, svgHeight - 30]);

    var xScale = d3.scaleLinear()
        .domain([0, d3.count(dataSet)])
        .range([0, svgWidth]);

    var xAxis = d3.axisBottom().scale(xScale);
    var yAxis = d3.axisLeft().scale(yScale);

    var svg = d3.select("body").append("svg")
        .attr('width', svgWidth + 100)
        .attr('height', svgHeight);


    svg.selectAll('rect')
        .data(dataSet)
        .enter()
        .append('rect')
        .attr("y", function (d) {
            return 0;
        })
        .attr('height', function (d) {
            return yScale(d);
        })
        .attr('width', (barWidth - barPadding))
        .attr('transform', function (d, i) {
            var translate = [barWidth * i + barPadding / 2, 0];
            return "translate(" + translate + ")";
        })
        .attr('fill', function (d, i) {
            return colorSet[i];
        });

    svg.selectAll("text")
        .data(dataSet)
        .enter()
        .append("text")
        .text(function (d) {
            return (d)
        })
        .attr("y", function (d) {
            return yScale(d) + 10;
        })
        .attr("x", function (d, i) {
            return barWidth * i + barWidth / 2;
        })
        .attr("fill", "red");


    // grp.attr("transform", "translate(" + 50 + ",50)").call(xAxis,yAxis);
    // grp.append("g").attr("transform", "translate(50,20)").call(xAxis);
}

function vericalBarChart() {
    var svgWidth = 900,
        svgHeight = 500,
        barHeight = svgHeight / d3.count(dataSet),
        barPadding = 10;
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataSet)])
        .range([0, svgWidth]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.count(dataSet)])
        .range([0, d3.count(dataSet)]);

    var svg = d3.select("body").append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    svg.selectAll("rect").data(dataSet).enter()
        .append("rect")
        .attr("height", yScale(barHeight - barPadding))
        .attr("width", function (d) {
            return xScale(d);
        })
        .attr("x", 0)
        .attr("transform", function (d, i) {
            return "translate(0," + barHeight * i + ")";
        })
        .attr("fill", function (d, i) {
            return colorSet[i];
        });
}

function circularChart() {
    var svgHeight = 500,
        svgWidth = 500;

    var svg = d3.select('body').append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

    var distance = 0;

    svg.selectAll('circle')
        .data(dataSet)
        .enter()
        .append('circle')
        .attr('cx', 70)
        .attr('cy', function (d, i) {
            distance += ((d * 2) + 10);
            return distance;
        })
        .attr('r', function (d) {
            return d;
        });
}

function linearChart() {
    var svgHeight = 500,
        svgWidth = 500;

    var svg = d3.select('body').append('svg')
        .attr('width', svgWidth + 500)
        .attr('height', svgHeight);

    var grp = d3.select('svg').append('g')
        .attr('transform', 'translate(50,-50)');

    // var data=[];
    // var data = d3.csv("data/week_temperature_sf.csv")
    //     .then(data => {
    //         data.forEach(d => {
    //             d.x = parseInt(d.x);
    //             d.y = parseFloat(d.y);
    //         });
    //         render(data);
    //     });
    // //  console.log(data);

    var data = [
        {
            "x": 1,
            "y": 23.95166256
        },
        {
            "x": 2,
            "y": 23.07288883
        },
        {
            "x": 3,
            "y": 22.27081905
        },
        {
            "x": 4,
            "y": 21.33943734
        },
        {
            "x": 5,
            "y": 20.1010743
        },
        {
            "x": 6,
            "y": 18.41507176
        },
        {
            "x": 7,
            "y": 17.74838176
        },
        {
            "x": 8,
            "y": 17.65897267
        },
        {
            "x": 9,
            "y": 17.09223348
        },
        {
            "x": 10,
            "y": 17.90226265
        },
        {
            "x": 11,
            "y": 17.9134315
        },
        {
            "x": 12,
            "y": 17.96234159
        },
        {
            "x": 13,
            "y": 18.62990499
        },
        {
            "x": 14,
            "y": 18.72464611
        },
        {
            "x": 15,
            "y": 18.34520321
        },
        {
            "x": 16,
            "y": 17.95094051
        },
        {
            "x": 17,
            "y": 17.64593674
        },
        {
            "x": 18,
            "y": 18.00261082
        },
        {
            "x": 19,
            "y": 18.64139448
        },
        {
            "x": 20,
            "y": 19.36714315
        },
        {
            "x": 21,
            "y": 20.80820121
        },
        {
            "x": 22,
            "y": 22.52385767
        },
        {
            "x": 23,
            "y": 24.42140515
        },
        {
            "x": 24,
            "y": 26.20496937
        },
        {
            "x": 25,
            "y": 26.57980248
        },
        {
            "x": 26,
            "y": 26.55250944
        },
        {
            "x": 27,
            "y": 23.9758725
        },
        {
            "x": 28,
            "y": 20.7705334
        },
        {
            "x": 29,
            "y": 19.58263616
        },
        {
            "x": 30,
            "y": 18.72653999
        },
        {
            "x": 31,
            "y": 18.28860291
        },
        {
            "x": 32,
            "y": 17.49047714
        },
        {
            "x": 33,
            "y": 17.1831431
        },
        {
            "x": 34,
            "y": 17.28988567
        },
        {
            "x": 35,
            "y": 17.85781004
        },
        {
            "x": 36,
            "y": 18.19921922
        },
        {
            "x": 37,
            "y": 18.13420906
        },
        {
            "x": 38,
            "y": 18.58881497
        },
        {
            "x": 39,
            "y": 18.6733003
        },
        {
            "x": 40,
            "y": 19.16008332
        },
        {
            "x": 41,
            "y": 19.2070958
        },
        {
            "x": 42,
            "y": 18.98470822
        },
        {
            "x": 43,
            "y": 19.42938021
        },
        {
            "x": 44,
            "y": 20.84931247
        },
        {
            "x": 45,
            "y": 21.58981452
        },
        {
            "x": 46,
            "y": 22.33971825
        },
        {
            "x": 47,
            "y": 22.78918589
        },
        {
            "x": 48,
            "y": 23.34126286
        },
        {
            "x": 49,
            "y": 23.49264201
        },
        {
            "x": 50,
            "y": 23.09622832
        },
        {
            "x": 51,
            "y": 22.26675029
        },
        {
            "x": 52,
            "y": 21.02661426
        },
        {
            "x": 53,
            "y": 20.00933499
        },
        {
            "x": 54,
            "y": 18.98514147
        },
        {
            "x": 55,
            "y": 18.5245615
        },
        {
            "x": 56,
            "y": 18.29069425
        },
        {
            "x": 57,
            "y": 18.05955087
        },
        {
            "x": 58,
            "y": 18.473279
        },
        {
            "x": 59,
            "y": 18.72584815
        },
        {
            "x": 60,
            "y": 18.55951286
        },
        {
            "x": 61,
            "y": 18.17967404
        },
        {
            "x": 62,
            "y": 17.76812994
        },
        {
            "x": 63,
            "y": 17.44302132
        },
        {
            "x": 64,
            "y": 17.34512052
        },
        {
            "x": 65,
            "y": 17.43747011
        },
        {
            "x": 66,
            "y": 17.89291916
        },
        {
            "x": 67,
            "y": 18.912204
        },
        {
            "x": 68,
            "y": 19.616197
        },
        {
            "x": 69,
            "y": 20.72998682
        },
        {
            "x": 70,
            "y": 21.76891307
        },
        {
            "x": 71,
            "y": 22.55338984
        },
        {
            "x": 72,
            "y": 22.83726683
        },
        {
            "x": 73,
            "y": 23.20147738
        },
        {
            "x": 74,
            "y": 22.56820629
        },
        {
            "x": 75,
            "y": 22.32056755
        },
        {
            "x": 76,
            "y": 20.86611186
        },
        {
            "x": 77,
            "y": 18.53601835
        },
        {
            "x": 78,
            "y": 17.51567245
        },
        {
            "x": 79,
            "y": 17.20668975
        },
        {
            "x": 80,
            "y": 17.19746046
        },
        {
            "x": 81,
            "y": 17.33778359
        },
        {
            "x": 82,
            "y": 17.28662296
        },
        {
            "x": 83,
            "y": 17.42911049
        },
        {
            "x": 84,
            "y": 17.4228793
        },
        {
            "x": 85,
            "y": 17.42095612
        },
        {
            "x": 86,
            "y": 17.14175783
        },
        {
            "x": 87,
            "y": 17.30485846
        },
        {
            "x": 88,
            "y": 17.33748279
        },
        {
            "x": 89,
            "y": 17.70165093
        },
        {
            "x": 90,
            "y": 17.56375289
        },
        {
            "x": 91,
            "y": 18.82761634
        },
        {
            "x": 92,
            "y": 19.44046487
        },
        {
            "x": 93,
            "y": 20.56460497
        },
        {
            "x": 94,
            "y": 21.95255079
        },
        {
            "x": 95,
            "y": 21.90402218
        },
        {
            "x": 96,
            "y": 22.81975416
        },
        {
            "x": 97,
            "y": 22.23908319
        },
        {
            "x": 98,
            "y": 22.46882449
        },
        {
            "x": 99,
            "y": 21.94618288
        },
        {
            "x": 100,
            "y": 21.32188831
        },
        {
            "x": 101,
            "y": 19.96887384
        },
        {
            "x": 102,
            "y": 18.9409031
        },
        {
            "x": 103,
            "y": 18.18299315
        },
        {
            "x": 104,
            "y": 17.60711327
        },
        {
            "x": 105,
            "y": 17.41557125
        },
        {
            "x": 106,
            "y": 17.81122388
        },
        {
            "x": 107,
            "y": 18.01183715
        },
        {
            "x": 108,
            "y": 17.99251107
        },
        {
            "x": 109,
            "y": 17.91461075
        },
        {
            "x": 110,
            "y": 17.63542977
        },
        {
            "x": 111,
            "y": 17.29909594
        },
        {
            "x": 112,
            "y": 16.89425341
        },
        {
            "x": 113,
            "y": 17.02159113
        },
        {
            "x": 114,
            "y": 17.53705472
        },
        {
            "x": 115,
            "y": 19.62395692
        },
        {
            "x": 116,
            "y": 21.42848625
        },
        {
            "x": 117,
            "y": 22.59716229
        },
        {
            "x": 118,
            "y": 24.4516364
        },
        {
            "x": 119,
            "y": 26.31417983
        },
        {
            "x": 120,
            "y": 27.29667258
        },
        {
            "x": 121,
            "y": 27.85940089
        },
        {
            "x": 122,
            "y": 26.98771524
        },
        {
            "x": 123,
            "y": 26.14196529
        },
        {
            "x": 124,
            "y": 24.29671351
        },
        {
            "x": 125,
            "y": 21.2627784
        },
        {
            "x": 126,
            "y": 19.62233665
        },
        {
            "x": 127,
            "y": 18.97029366
        },
        {
            "x": 128,
            "y": 18.64173108
        },
        {
            "x": 129,
            "y": 18.54300284
        },
        {
            "x": 130,
            "y": 18.25972095
        },
        {
            "x": 131,
            "y": 17.82518352
        },
        {
            "x": 132,
            "y": 17.47268774
        },
        {
            "x": 133,
            "y": 17.65194608
        },
        {
            "x": 134,
            "y": 17.74917919
        },
        {
            "x": 135,
            "y": 17.59178818
        },
        {
            "x": 136,
            "y": 17.52394164
        },
        {
            "x": 137,
            "y": 17.53072011
        },
        {
            "x": 138,
            "y": 18.24899645
        },
        {
            "x": 139,
            "y": 20.27975179
        },
        {
            "x": 140,
            "y": 21.88870961
        },
        {
            "x": 141,
            "y": 23.8693783
        },
        {
            "x": 142,
            "y": 25.64349244
        },
        {
            "x": 143,
            "y": 27.33387017
        },
        {
            "x": 144,
            "y": 30.23530763
        },
        {
            "x": 145,
            "y": 31.67840142
        },
        {
            "x": 146,
            "y": 32.42433235
        },
        {
            "x": 147,
            "y": 33.16889807
        },
        {
            "x": 148,
            "y": 30.87132211
        },
        {
            "x": 149,
            "y": 26.89440976
        },
        {
            "x": 150,
            "y": 24.61281505
        },
        {
            "x": 151,
            "y": 22.88974643
        },
        {
            "x": 152,
            "y": 21.71487362
        },
        {
            "x": 153,
            "y": 20.8438711
        },
        {
            "x": 154,
            "y": 19.25596997
        },
        {
            "x": 155,
            "y": 18.33736865
        },
        {
            "x": 156,
            "y": 17.61777081
        },
        {
            "x": 157,
            "y": 17.19774444
        },
        {
            "x": 158,
            "y": 16.7043133
        },
        {
            "x": 159,
            "y": 16.24718113
        },
        {
            "x": 160,
            "y": 16.0878619
        },
        {
            "x": 161,
            "y": 15.63626353
        },
        {
            "x": 162,
            "y": 15.69252876
        },
        {
            "x": 163,
            "y": 16.11868551
        },
        {
            "x": 164,
            "y": 17.38862583
        },
        {
            "x": 165,
            "y": 18.25409101
        },
        {
            "x": 166,
            "y": 19.51483274
        },
        {
            "x": 167,
            "y": 20.60232663
        },
        {
            "x": 168,
            "y": 21.38540668
        },
        {
            "x": 169,
            "y": 21.9084984
        }
    ];


    var xScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) {
            return d.x
        })])
        .range([0, svgWidth]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) {
            return d.y
        })])
        .range([0, svgHeight]);

    var xAxis = d3.axisBottom().scale(xScale);

    for (var i = 0; i < data.length; i++) {
        data[i]['x'];
        data[i]['y'];
    }

    var line = d3.line()
        .x(function (d) {
            return xScale(parseInt(d.x));
        })
        .y(function (d) {
            return yScale(parseInt(d.y));
        })
        .curve(d3.curveBundle);


    grp.selectAll('path')
        .data([data])
        .enter()
        .append('path')
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'red')
        .attr('stroke-width', 2);
    console.log(svgHeight - 250);
    grp.append('g')
        .attr('transform', 'translate(0,' + (svgHeight - 20) + ')')
        .call(xAxis);

}

function drawArcFunction() {
    var arc = d3.arc()
        .innerRadius(100)
        .outerRadius(240)
        .cornerRadius(50);

    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var data = [1, 55, 89];
    var arcs = d3.pie()(data);

    console.log("arcs: ", arc(arcs[0]));

    var background = g.selectAll("path")
        .data(arcs)
        .enter()
        .append("path")
        .style("fill", function (d, i) {
            return d3.color("hsl(20, 100%, " + d.value + "%)");
        })
        .attr("d", arc);
}

function CurveLineFunction() {
    var svgHeight = 500, svgWidth = 500;
    var data = {source: {x: 10, y: 20}, target: {x: 300, y: 400}};

    var link = d3.linkHorizontal()
        .x(function (d) {
            return d.x
        })
        .y(function (d) {
            return d.y;
        });

    var svg = d3.select('body').append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

    svg.append('path')
        .attr("fill", "none")
        .attr('stroke', 'red')
        .attr("d", link(data));
}

function diagonalLine() {
    var data = {source: {x: 10, y: 300}, target: {x: 300, y: 10}};

    var diagonal = d3.linkHorizontal()
        .x(function (d) {
            return d.x
        })
        .y(function (d) {
            return d.y;
        });
    var canvas = d3.select("body").append("svg").attr("width", 500).attr("height", 500);

    canvas.append("path")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("d", diagonal(data));
}

function countryTree() {
    var width = 900,
        height = 900;
    var margin = {top: 50, right: 50, bottom: 50, left: 150};
    var innerWidth = width - margin.right - margin.left,
        innerHeight = height - margin.top - margin.bottom;

    var svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height);

    var g = svg.append('g')
        .attr('transform', 'translate(' + margin.left + "," + margin.top + ')');

    var treeLayout = d3.cluster()
        .size([innerHeight, innerWidth]);

    svg.call(d3.zoom()
        .on('zoom', (event) => {
            svg.attr('transform', event.transform);
        })
        .scaleExtent([1, 40]));


    d3.json('myData.json')
        .then(data => {
            const root = d3.hierarchy(data);
            const links = treeLayout(root).links();
            g.selectAll('path').data(links)
                .enter().append('path')
                .attr('d', d3.linkHorizontal()
                    .x(function (d) {
                        return d.y;
                    })
                    .y(function (d) {
                        return d.x;
                    }))
                .attr('fill', 'none')
                .attr('stroke', 'pink');


            g.selectAll('circle').data(root.descendants())
                .enter().append('circle')
                .attr('cx', d => d.y)
                .attr('cy', d => d.x)
                .attr('r', 5)
                .attr('fill', 'lightblue')
                .attr('stroke', 'darkblue');

            g.selectAll('text').data(root.descendants())
                .enter().append('text')
                .attr('x', d => d.y)
                .attr('y', d => d.x)
                .attr('dy', '0.32em')
                .attr('text-anchor', d => d.children ? 'start' : 'start')
                .attr('font-size', d => 3.25 - d.depth + 'em')
                .text(d => d.data.data.id);

        })
}


function circleForcedSimulation() {
    var width = window.innerWidth, height = window.innerHeight, sizeDivisor = 100, nodePadding = 2.5;

    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var color = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]);


    var simulation = d3.forceSimulation()
    //تنظیم قرار گرفتن به صورت طولی یا عرضی ، تمام نمودار
        .force("forceX", d3.forceX().strength(.1).x(width * .5))
        .force("forceY", d3.forceY().strength(.9).y(height * .5))
        //تنظیم قرار گرفتن مرکز ، تمام نمودار
        .force("center", d3.forceCenter().x(width * .5).y(height * .5))
        //تنظیم فاصله نودها
        .force("charge", d3.forceManyBody().strength(-15));

    d3.csv("circleForcedSimulation.csv", types, function (error, graph) {
        if (error) throw error;

        // sort the nodes so that the bigger ones are at the back
        graph = graph.sort(function (a, b) {
            return b.size - a.size;
        });

        //update the simulation based on the data
        simulation
            .nodes(graph)
            .force("collide", d3.forceCollide().strength(.5)
                .radius(function (d) {
                    return d.radius + nodePadding;
                })
                .iterations(1))
            .on("tick", function (d) {
                node
                    .attr("cx", function (d) {
                        return d.x;
                    })
                    .attr("cy", function (d) {
                        return d.y;
                    })
            });

        var node = svg.append("g")
            .attr("class", "node")
            .selectAll("circle")
            .data(graph)
            .enter().append("circle")
            .attr("r", function (d) {
                return d.radius;
            })
            .attr("fill", function (d) {
                return color(d.continent);
            })
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

    });

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(.03).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(.03);
        d.fx = null;
        d.fy = null;
    }

    function types(d) {
        d.gdp = +d.gdp;
        d.size = +d.gdp / sizeDivisor;
        d.size < 3 ? d.radius = 3 : d.radius = d.size;
        return d;
    }

}


function TidyTreevsDendogram() {
    d3.json("flare.json",function (data) {

    var width = 960;
    var height = 500;

    margin = {left: 100, top: 100, right: 50, bottom: 50};

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    var g = svg.append("g").attr('transform','translate('+ margin.left +','+ margin.right +')');

    var root = d3.hierarchy(data);

// Tree
    var tree = d3.tree()
        .size([width-margin.left-margin.right,height-margin.top-margin.bottom]);

// Cluster
    var cluster = d3.cluster()
        .size([height-margin.top-margin.bottom,width-margin.left-margin.right]);

// Set initial vertical Tree
    var link = g.selectAll(".link")
        .data(tree(root).links())
        .enter().append("path")
        .attr("class", "link")
        .attr("fill","none")
        .attr("stroke","#ccc")
        .attr("d", d3.linkVertical()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; }));

    var node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

    node.append("circle")
        .attr("r", 2.5);

    node.append("text")
        .text(function(d) { return d.data.name; })
        .attr('y',-10)
        .attr('x',-10)
        .attr('text-anchor','middle');

    verticalCluster();
    showcase();



    function verticalTree() {
        // Transition to vertical
        ///
        g.transition().attr("transform",'translate('+ margin.left +','+ margin.right +')').duration(5000);
        tree.size([width-margin.left-margin.right,height-margin.top-margin.bottom]);
        link.data(tree(root).links())
            .transition()
            .attr("d", d3.linkVertical()
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; }))
            .duration(5000);

        node.transition()
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
            .duration(5000)
    }



    function horizontalTree() {
        // Transition to horizontal
        ///
        g.transition().attr("transform",'translate('+ margin.left +','+ margin.right +')').duration(5000);
        tree.size([height-margin.top-margin.bottom,width-margin.left-margin.right]);
        link.data(tree(root).links())
            .transition()
            .attr("d", d3.linkHorizontal()
                .x(function(d) { return d.y; })
                .y(function(d) { return d.x; }))
            .duration(5000);

        node.transition()
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
            .duration(5000);
    }

    function radialTree() {
        // Transition to Radial
        //
        g.transition().attr("transform","translate("+width/2+","+height/2+")").duration(5000);
        tree.size([2 * Math.PI, height/2]);
        link.data(tree(root).links())
            .transition()
            .attr("d", d3.linkRadial()
                .angle(function(d) { return d.x; })
                .radius(function(d) { return d.y; }))
            .duration(5000);

        node.transition()
            .attr("transform", function(d) { return "translate(" + radialPoint(d.x, d.y) + ")"; })
            .duration(5000);

    }

    function horizontalCluster() {
        g.transition().attr("transform",'translate('+ margin.left +','+ margin.right +')').duration(5000);
        cluster.size([height-margin.top-margin.bottom,width-margin.left-margin.right]);
        link
            .data(cluster(root).links())
            .transition()
            .attr("d", function(d) { console.log(d);
                return "M" + d.source.y + "," + d.source.x
                    + "C" + (d.source.y +100) + "," + d.source.x
                    + " " + (d.source.y +100) + "," + d.target.x
                    + " " + d.target.y + "," + d.target.x;
            })
            .duration(5000)

        node.transition()
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
            .duration(5000);
    }

    function verticalCluster() {
        g.transition().attr("transform",'translate('+ margin.left +','+ margin.right +')').duration(5000);
        cluster.size([width-margin.left-margin.right,height-margin.top-margin.bottom]);
        link
            .data(cluster(root).links())
            .transition()
            .attr("d", function(d) { console.log(d);
                return "M" + d.source.x + "," + d.source.y
                    + "C" + d.source.x + "," + (d.source.y+60)
                    + " " + d.target.x + "," + (d.source.y+60)
                    + " " + d.target.x + "," + d.target.y;
            })
            .duration(5000)

        node.transition()
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
            .duration(5000);
    }

    function radialCluster() {
        g.transition().attr("transform","translate("+width/2+","+height/2+")").duration(5000);
        cluster.size([2 * Math.PI,height/2 - 40]);

        link
            .data(cluster(root).links())
            .transition()
            .attr("d", function(d) {
                return "M" + radialPoint(d.source.x, d.source.y)
                    + "C" + radialPoint(d.source.x, (d.target.y + d.source.y) / 2)
                    + " " + radialPoint(d.target.x, (d.target.y + d.source.y) / 2)
                    + " " + radialPoint(d.target.x, d.target.y);
            })
            .duration(5000);

        node.transition()
            .attr("transform", function(d) { return "translate(" + radialPoint(d.x, d.y) + ")"; })
            .duration(5000);
    }

    function radialPoint(x, y) {
        return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
    }


    var i = 1;

    function showcase() {
        setTimeout(function() {
            if (++i%6 == 4) { horizontalTree(); }
            else if  (i%6 == 2) { radialTree(); }
            else if (i%6 == 5) { horizontalCluster(); }
            else if (i%6 == 3) { radialCluster(); }
            else if (i%6 == 1) { verticalCluster(); }
            else { verticalTree(); }
            showcase();
        }, 5500)



    }
    });
}


function zoomDragCollapsTree() {
    // Get JSON data
    treeJSON = d3.json("zoomDragCollapsTree-madreseAwli.json", function (error, treeData) {

        // Calculate total nodes, max label length
        var totalNodes = 0;
        var maxLabelLength = 0;
        // variables for drag/drop
        var selectedNode = null;
        var draggingNode = null;
        // panning variables
        var panSpeed = 200;
        var panBoundary = 20; // Within 20px from edges will pan when dragging.
        // Misc. variables
        var i = 0;
        var duration = 750;
        var root;

        // size of the diagram
        var viewerWidth = $(document).width();
        var viewerHeight = $(document).height();

        var tree = d3.layout.tree()
            .size([viewerHeight, viewerWidth]);

        // define a d3 diagonal projection for use by the node paths later on.
        var diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.y, d.x];
            });

        // A recursive helper function for performing some setup by walking through all nodes

        function visit(parent, visitFn, childrenFn) {
            if (!parent) return;

            visitFn(parent);

            var children = childrenFn(parent);
            if (children) {
                var count = children.length;
                for (var i = 0; i < count; i++) {
                    visit(children[i], visitFn, childrenFn);
                }
            }
        }

        // Call visit function to establish maxLabelLength
        visit(treeData, function (d) {
            totalNodes++;
            maxLabelLength = Math.max(d.name.length, maxLabelLength);

        }, function (d) {
            return d.children && d.children.length > 0 ? d.children : null;
        });


        // sort the tree according to the node names

        function sortTree() {
            // tree.sort(function(a, b) {
            //     return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
            // });
        }

        // Sort the tree initially incase the JSON isn't in a sorted order.
        sortTree();

        // TODO: Pan function, can be better implemented.

        function pan(domNode, direction) {
            var speed = panSpeed;
            if (panTimer) {
                clearTimeout(panTimer);
                translateCoords = d3.transform(svgGroup.attr("transform"));
                if (direction == 'left' || direction == 'right') {
                    translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                    translateY = translateCoords.translate[1];
                } else if (direction == 'up' || direction == 'down') {
                    translateX = translateCoords.translate[0];
                    translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
                }
                scaleX = translateCoords.scale[0];
                scaleY = translateCoords.scale[1];
                scale = zoomListener.scale();
                svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
                d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
                zoomListener.scale(zoomListener.scale());
                zoomListener.translate([translateX, translateY]);
                panTimer = setTimeout(function () {
                    pan(domNode, speed, direction);
                }, 50);
            }
        }

        // Define the zoom function for the zoomable tree

        function zoom() {
            svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        }


        // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
        var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

        function initiateDrag(d, domNode) {
            draggingNode = d;
            d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
            d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
            d3.select(domNode).attr('class', 'node activeDrag');

            svgGroup.selectAll("g.node").sort(function (a, b) { // select the parent and sort the path's
                if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
                else return -1; // a is the hovered element, bring "a" to the front
            });
            // if nodes has children, remove the links and nodes
            if (nodes.length > 1) {
                // remove link paths
                links = tree.links(nodes);
                nodePaths = svgGroup.selectAll("path.link")
                    .data(links, function (d) {
                        return d.target.id;
                    }).remove();
                // remove child nodes
                nodesExit = svgGroup.selectAll("g.node")
                    .data(nodes, function (d) {
                        return d.id;
                    }).filter(function (d, i) {
                        if (d.id == draggingNode.id) {
                            return false;
                        }
                        return true;
                    }).remove();
            }

            // remove parent link
            parentLink = tree.links(tree.nodes(draggingNode.parent));
            svgGroup.selectAll('path.link').filter(function (d, i) {
                if (d.target.id == draggingNode.id) {
                    return true;
                }
                return false;
            }).remove();

            dragStarted = null;
        }

        // define the baseSvg, attaching a class for styling and the zoomListener
        var baseSvg = d3.select("#tree-container").append("svg")
            .attr("width", viewerWidth)
            .attr("height", viewerHeight)
            .attr("class", "overlay")
            .call(zoomListener);


        // Define the drag listeners for drag/drop behaviour of nodes.
        dragListener = d3.behavior.drag()
            .on("dragstart", function (d) {
                if (d == root) {
                    return;
                }
                dragStarted = true;
                nodes = tree.nodes(d);
                d3.event.sourceEvent.stopPropagation();
                // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
            })
            .on("drag", function (d) {
                if (d == root) {
                    return;
                }
                if (dragStarted) {
                    domNode = this;
                    initiateDrag(d, domNode);
                }

                // get coords of mouseEvent relative to svg container to allow for panning
                relCoords = d3.mouse($('svg').get(0));
                if (relCoords[0] < panBoundary) {
                    panTimer = true;
                    pan(this, 'left');
                } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

                    panTimer = true;
                    pan(this, 'right');
                } else if (relCoords[1] < panBoundary) {
                    panTimer = true;
                    pan(this, 'up');
                } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
                    panTimer = true;
                    pan(this, 'down');
                } else {
                    try {
                        clearTimeout(panTimer);
                    } catch (e) {

                    }
                }

                d.x0 += d3.event.dy;
                d.y0 += d3.event.dx;
                var node = d3.select(this);
                node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
                updateTempConnector();
            }).on("dragend", function (d) {
                if (d == root) {
                    return;
                }
                domNode = this;
                if (selectedNode) {
                    // now remove the element from the parent, and insert it into the new elements children
                    var index = draggingNode.parent.children.indexOf(draggingNode);
                    if (index > -1) {
                        draggingNode.parent.children.splice(index, 1);
                    }
                    if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
                        if (typeof selectedNode.children !== 'undefined') {
                            selectedNode.children.push(draggingNode);
                        } else {
                            selectedNode._children.push(draggingNode);
                        }
                    } else {
                        selectedNode.children = [];
                        selectedNode.children.push(draggingNode);
                    }
                    // Make sure that the node being added to is expanded so user can see added node is correctly moved
                    expand(selectedNode);
                    sortTree();
                    endDrag();
                } else {
                    endDrag();
                }
            });

        function endDrag() {
            selectedNode = null;
            d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
            d3.select(domNode).attr('class', 'node');
            // now restore the mouseover event or we won't be able to drag a 2nd time
            d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
            updateTempConnector();
            if (draggingNode !== null) {
                update(root);
                centerNode(draggingNode);
                draggingNode = null;
            }
        }

        // Helper functions for collapsing and expanding nodes.

        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        function expand(d) {
            if (d._children) {
                d.children = d._children;
                d.children.forEach(expand);
                d._children = null;
            }
        }

        var overCircle = function (d) {
            selectedNode = d;
            updateTempConnector();
        };
        var outCircle = function (d) {
            selectedNode = null;
            updateTempConnector();
        };

        // Function to update the temporary connector indicating dragging affiliation
        var updateTempConnector = function () {
            var data = [];
            if (draggingNode !== null && selectedNode !== null) {
                // have to flip the source coordinates since we did this for the existing connectors on the original tree
                data = [{
                    source: {
                        x: selectedNode.y0,
                        y: selectedNode.x0
                    },
                    target: {
                        x: draggingNode.y0,
                        y: draggingNode.x0
                    }
                }];
            }
            var link = svgGroup.selectAll(".templink").data(data);

            link.enter().append("path")
                .attr("class", "templink")
                .attr("d", d3.svg.diagonal())
                .attr('pointer-events', 'none');

            link.attr("d", d3.svg.diagonal());

            link.exit().remove();
        };

        // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

        function centerNode(source) {
            scale = zoomListener.scale();
            x = -source.y0;
            y = -source.x0;
            x = x * scale + viewerWidth / 2;
            y = y * scale + viewerHeight / 2;
            d3.select('g').transition()
                .duration(duration)
                .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
            zoomListener.scale(scale);
            zoomListener.translate([x, y]);
        }

        // Toggle children function

        function toggleChildren(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else if (d._children) {
                d.children = d._children;
                d._children = null;
            }
            return d;
        }

        // Toggle children on click.

        function click(d) {
            if (d3.event.defaultPrevented) return; // click suppressed
            d = toggleChildren(d);
            update(d);
            centerNode(d);
        }

        function update(source) {
            // Compute the new height, function counts total children of root node and sets tree height accordingly.
            // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
            // This makes the layout more consistent.
            var levelWidth = [1];
            var childCount = function (level, n) {

                if (n.children && n.children.length > 0) {
                    if (levelWidth.length <= level + 1) levelWidth.push(0);

                    levelWidth[level + 1] += n.children.length;
                    n.children.forEach(function (d) {
                        childCount(level + 1, d);
                    });
                }
            };
            childCount(0, root);
            var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line
            tree = tree.size([newHeight, viewerWidth]);

            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Set widths between levels based on maxLabelLength.
            nodes.forEach(function (d) {
                d.y = (d.depth * (maxLabelLength * 5)); //maxLabelLength * 10px
                // alternatively to keep a fixed scale one can set a fixed depth per level
                // Normalize for fixed-depth by commenting out below line
                // d.y = (d.depth * 500); //500px per level.
            });

            // Update the nodes…
            node = svgGroup.selectAll("g.node")
                .data(nodes, function (d) {
                    return d.id || (d.id = ++i);
                });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .call(dragListener)
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on('click', click);

            nodeEnter.append("circle")
                .attr('class', 'nodeCircle')
                .attr("r", 0)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            nodeEnter.append("text")
                .attr("x", function (d) {
                    return d.children || d._children ? -10 : 10;
                })
                .attr("dy", ".35em")
                .attr('class', 'nodeText')
                .attr("text-anchor", function (d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function (d) {
                    return d.name;
                })
                .style("fill-opacity", 0);

            // phantom node to give us mouseover in a radius around it
            nodeEnter.append("circle")
                .attr('class', 'ghostCircle')
                .attr("r", 30)
                .attr("opacity", 0.2) // change this to zero to hide the target area
                .style("fill", "red")
                .attr('pointer-events', 'mouseover')
                .on("mouseover", function (node) {
                    overCircle(node);
                })
                .on("mouseout", function (node) {
                    outCircle(node);
                });

            // Update the text to reflect whether node has children or not.
            node.select('text')
                .attr("x", function (d) {
                    return d.children || d._children ? -10 : 10;
                })
                .attr("text-anchor", function (d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function (d) {
                    return d.name;
                });

            // Change the circle fill depending on whether it has children and is collapsed
            node.select("circle.nodeCircle")
                .attr("r", 4.5)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

            // Fade the text in
            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + source.y + "," + source.x + ")";
                })
                .remove();

            nodeExit.select("circle")
                .attr("r", 0);

            nodeExit.select("text")
                .style("fill-opacity", 0);

            // Update the links…
            var link = svgGroup.selectAll("path.link")
                .data(links, function (d) {
                    return d.target.id;
                });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                    var o = {
                        x: source.x0,
                        y: source.y0
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                    var o = {
                        x: source.x,
                        y: source.y
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });

        }

        // Append a group which holds all nodes and which the zoom Listener can act upon.
        var svgGroup = baseSvg.append("g");

        // Define the root
        root = treeData;
        root.x0 = viewerHeight / 2;
        root.y0 = 0;

        // Layout the tree initially and center on the root node.
        collapse(root);
        update(root);
        centerNode(root);
    });


}

// horizontalBarChart();
// vericalBarChart();
// circularChart();
// linearChart();
// drawArcFunction();
// CurveLineFunction();
// diagonalLine();
// countryTree();
// circleForcedSimulation();
// zoomDragCollapsTree();
 TidyTreevsDendogram();

