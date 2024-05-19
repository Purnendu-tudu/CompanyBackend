import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

    //here we are ceating many deprtments
    const departments = await prisma.dept.createMany({
        data:[
            {id:"BDEV12", name:"Backend Developer" },
            {id:"FDEV12", name:"Frontend Developer"},
            {id:"SYSA12", name:"System Administrator"},
            {id:"MARD12", name:"Marketing Department"}
        ]
    });

    console.log('Department Created',departments);

    const employee = await prisma.employee.createMany({
        data: [
            { first_name: 'John', last_name: 'Doe', address: '123 Main St', city: 'Anytown', pincode: 12345, deptId: 'BDEV12' },
            { first_name: 'Jane', last_name: 'Smith', address: '456 Elm St', city: 'Othertown', pincode: 23456, deptId: 'BDEV12' },
            { first_name: 'Alice', last_name: 'Johnson', address: '789 Oak St', city: 'Sometown', pincode: 34567, deptId: 'FDEV12' },
            { first_name: 'Bob', last_name: 'Brown', address: '101 Maple St', city: 'Anycity', pincode: 45678, deptId: 'FDEV12' },
            { first_name: 'Charlie', last_name: 'Davis', address: '202 Pine St', city: 'Yourtown', pincode: 56789, deptId: 'SYSA12' },
            { first_name: 'Diana', last_name: 'Evans', address: '303 Birch St', city: 'Heretown', pincode: 67890, deptId: 'SYSA12' },
            { first_name: 'Evan', last_name: 'Green', address: '404 Cedar St', city: 'Thistown', pincode: 78901, deptId: 'MARD12' },
            { first_name: 'Fiona', last_name: 'Harris', address: '505 Spruce St', city: 'Thattown', pincode: 89012, deptId: 'MARD12' },
            { first_name: 'George', last_name: 'King', address: '606 Fir St', city: 'Anyvillage', pincode: 90123 }, // No department
            { first_name: 'Hannah', last_name: 'Lee', address: '707 Redwood St', city: 'Everytown', pincode: 12345 }, // No department
          ],
    });

    

}


//here run our main function 

main().catch(e =>{console.error(e);process.exit(1)}).finally(async () => {await prisma.$disconnect});
