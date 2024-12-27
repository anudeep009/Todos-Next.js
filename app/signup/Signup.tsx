import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Signup() {
  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
                Create a new account    
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Username</Label>
              <Input id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="username" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Signup</Button>
          </CardFooter>
        </Card>
    </div>
  )
}

export default Signup