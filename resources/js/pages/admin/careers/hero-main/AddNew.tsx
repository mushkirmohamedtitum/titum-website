import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { THEME } from '@/constants/theme';
import { Plus } from 'lucide-react';

const AddNew = () => {
    const { theme } = useTheme();

    return (
        <Dialog>
            {/* <form> */}
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className={`${theme == THEME.DARK ? '' : 'bg-logoPurple text-slate-200 transition-all hover:bg-logoPurpleHover hover:text-slate-50'}`}
                >
                    <Plus />
                    <span>Add New</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New</DialogTitle>
                    <DialogDescription>Make changes to your content here. Click save when you&apos;re done.</DialogDescription>
                </DialogHeader>
                <form action="">
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </div>
                    </div>

                    <DialogFooter className="mt-5">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit">Submit</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            {/* </form> */}
        </Dialog>
    );
};

export default AddNew;
