// Basic Arithmetic Problems

// Q1.In one night, a movie theater sells tickets
// for 6450 dollars.Each ticket costs 15 dollars.How many tickets were sold ?
let tickets_income=6450
let tickets_price=15
let tickets_sold=(tickets_income/tickets_price)

console.log(tickets_sold)

//     Q2.Sylvia 's income is 500 dollars per week. How much does Sylvia makes every year?

let weeks_year=52
let week_income= 500
let year_income=(weeks_year*week_income)
console.log(year_income)

// Percentage

// Q3.Calculate the percentage of 17 / 30. Expected output: number %

let percentage =((17*100)/30)
console.log(percentage)

//     Geometry Formulas

// Q4.Calculate the perimeter of a square.Assume each side is 4.75 cm.

let perimeter= 4.75*4
console.log(perimeter)


// Q5.Calculate the perimeter of a triangle.Assume the length of the sides are 5 cm, 6 cm, 7 cm.

let a=5
let b=6
let c=7
let perimeter_tri=a+b+c
console.log(perimeter_tri)

// Q6.Calculate the area of a square.Each side is 5 cm.

let square_side=5
let area_square=(square_side*square_side)
console.log(area_square)

// Q7.Calculate the area of a triangle.Assume the length of the sides are 5 cm, 6 cm, 7 cm.


let s=(a+b+c)/2
let area_tri=Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log(area_tri)


// Q8.Calculate the volume of a cube.Length of each side is 9 cm.

let cube_side=9
let cube_area= cube_side*cube_side*cube_side
console.log(cube_area)

// Consumer Formula

// Q9.Calculate the three bills including tips: €22.35 + 10 % tip€ 26.67 + 15 % tip€ 35.92 + 20 % tip

let tips=(22.35*1.1)+(26.67*1.15)+(35.92*1.2)
console.log(tips)

// Average

// Q10.The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy 's average hours worked per day?

let average_work=(8+6+5+9+8+2+1+8.5+7+4)/10
console.log(average_work)


// Q11.A math student scored 75, 70, 85, 90, 100 on the first five tests he took.After he took his sixth math test, the average is now 85. What did he score on the sixth test ? Expected output : Score in the sixth test: --.



let x= (85*6)-75-70-85-90-100
console.log("Score in the sixth test:",x)

// Q12.For James to get a 1 st class degree, he needs to get an average of 80 % in all 9 of his assessments.He has taken 8 assessments and his average is 78 % .
//What is the minimum percentage he must get in his last assessment to ensure he gets a first class ? 
//Expected output : James needs a minimum of -- % to get an 80 % average.

let y= 80*9-(8*78)
console.log("James needs a minimum of",y,"% to get an 80 % average.")

