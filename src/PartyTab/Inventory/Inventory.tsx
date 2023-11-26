import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type InventoryRowProps = {
	items: number[],
	handleItemChange: (itemIndex: number, listIndex: number) => void
}

const Inventory = ({ items, handleItemChange }: InventoryRowProps) => (
  <>
    <Typography variant='h6' sx={{py: 3}}>Inventory</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
      {items.map((item, index) => (
        <Button key={`inventory-item-${index}`} onClick={() => handleItemChange(index, 2)}>
          <Box
            component='img'
            src={`https://placekitten.com/50/50?image=${item}`} 
            alt={`item-${item.toString()}`}
          />
        </Button>
        )
      )}
    </Box>
  </>
)

export default Inventory;