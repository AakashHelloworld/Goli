import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {Ellipsis, Pencil, Trash} from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    }
  ]
  
export default function TaskContainer() {

    return (    
        <Card className="">
<Table>
      <TableHeader>
        <TableRow>
          <TableHead className="flex gap-2 items-center"><Checkbox />Check All Tasks</TableHead>
          <TableHead className="text-left">Edit</TableHead>
          <TableHead className="text-left">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="flex gap-2 items-center">
                <Checkbox />
                <p>Make payment fast as soon as possible. Make payment fast as soon as possible.</p>
            </TableCell>
            <TableCell className="text-left cursor-pointer">
                <Pencil className="h-4 w-4 cursor-pointer "  />
            </TableCell>
            <TableCell className="text-left cursor-pointer">
                <Trash className="h-4 w-4 cursor-pointer " color="#bd8383" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Card>

    )
}