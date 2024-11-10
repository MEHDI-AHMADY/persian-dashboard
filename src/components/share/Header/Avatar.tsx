import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarDemo() {
    return (
      <Avatar className="w-10 h-10 cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
    )
  }
  