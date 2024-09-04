import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-none border-0">
        <CardContent className="py-6 font-light text-[#838896]">
          <p className="text-sm">
            © 2024 Copyright <span className="font-bold">natanD1</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
