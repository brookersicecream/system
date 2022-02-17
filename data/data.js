// This is for really stable data so we don't have to ask for it every time. Since stores, rarely change and we aren't worried about this information being available to the user, we store the set of stores and their primary key values from Airtable.
console.log("--------------------------------------------------->3")
store_sequence=[
    "Vineyard",
    "Herriman",
    "Provo"
]

stores={
    recxfZ0QqJQwKKlMC:"Herriman",
    recPqTEeqvuIVsUHO:"Provo",
    recoGefTBA6p5ESLF:"Vineyard",
    Herriman:"recxfZ0QqJQwKKlMC",
    Provo:"recPqTEeqvuIVsUHO",
    Vineyard:"recoGefTBA6p5ESLF"
}
