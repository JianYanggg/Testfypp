const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testfyp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
    employee_id: String,
    name: String,
    email: String,
    phone: String,
    company: String,
    package: String,
    
})

// Create Model
const Employee = mongoose.model("Employee", employeeSchema)

// Sample Employee Data
const employees = [
    
    {
        employee_id: "E67890",
        name: "Wee Jian Yang",
        email: "weejianyang@gmail.com",
        phone: "+65 8498 1613",
        company: "Republic Polytechnic",
        package: "Basic"
    },
    {
        employee_id: "E54321",
        name: "Ernest Chan",
        email: "ernestchan@gmail.com",
        phone: "+65 8221 4553",
        company: "Republic Polytechnic",
        package: "Basic"
    },
    {
        employee_id: "E67890",
        name: "Wee Jian Yang",
        email: "weejianyang@gmail.com",
        phone: "+65 8498 1613",
        company: "Republic Polytechnic",
        package: "Basic"
    }
    // Add more employees as needed
]

// Insert Sample Data into MongoDB
async function seedDatabase() {
    try {
        await Employee.deleteMany() // Clear existing data if needed
        await Employee.insertMany(employees)
        console.log("Employee data seeded successfully")
        mongoose.connection.close() // Close the connection after seeding
    } catch (error) {
        console.error("Error seeding data:", error)
    }
}

seedDatabase()
