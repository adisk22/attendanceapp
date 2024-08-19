"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'


function AddNewStudent() {
    const [open,setOpen]= useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit=(data)=>{
        console.log("FormData", data);
      }
  return (
    <div>
        <Button onClick={()=>setOpen(true)}>+ Add New Student</Button>
        <Dialog open={open}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogDescription>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='py-2'>
                        <label>Full Name</label>
                        <Input placeholder='Ex. LeBron James'
                        {...register('name',{required:true})}
                        />
                    </div>
                    <div className = 'flex flex-col py-2'>
                        <label>Select Grade</label>
                        <select className = 'p=3 border rounded-lg'
                        {...register('grade',{required:true})}>
                            <option value={'JK'}>JK</option>
                            <option value={'SK'}>SK</option>
                            <option value={'1st'}>1st</option>
                            <option value={'2nd'}>2nd</option>
                            <option value={'3rd'}>3rd</option>
                            <option value={'4th'}>4th</option>
                            <option value={'5th'}>5th</option>
                            <option value={'6th'}>6th</option>
                            <option value={'7th'}>7th</option>
                            <option value={'8th'}>8th</option>

                        </select>
                    </div>
                    <div className='py-3'>
                        <label>Contact Number</label>
                        <Input type ="number"placeholder='Ex. 1234567890'
                        {...register('contact')}/>
                    </div>
                    <div className='py-3'>
                        <label>Address</label>
                        <Input placeholder='Ex. 111 James Street'
                        {...register('address')}/>
                    </div>

                    <div className= 'flex gap-3 items-center justify-end mt-5'>
                        <Button onClick={()=>setOpen(false)} variant='ghost'>Cancel</Button>
                        <Button type = 'submit'>Save</Button>
                    </div>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

    </div>
  )
}

export default AddNewStudent