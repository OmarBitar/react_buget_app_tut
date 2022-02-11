import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function BudgetCard({name,amount,max, gray}) {
  const classNames = []
  if (amount > max) {
    classNames.push("bg-danger","bg-opacity-10")
  } else if (gray) {
    classNames.push("bg-light")
  }
  return <Card className={classNames.join(" ")}>
      <Card.Body>
          <Card.Title>
            <div>{name}</div>  
            <div>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</div>
          </Card.Title>
          <ProgressBar 
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
          <br/>
          <Stack direction="horizontal" gap="2">
            <Button variant="outline-primary">Add Expense</Button>
            <Button variant="outline-secondary">View Expense</Button>
          </Stack>
      </Card.Body>
  </Card>;
}

function getProgressBarVariant(amount, max ) {
  const ratio = amount / max
  if (ratio < .5) return "primary"
  if (ratio < .75) return "warning"
  return "danger"
}