import TheTextInput from '@/components/form/TheTextInput';
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
import { FieldGroup } from '@/components/ui/field';
import { THEME } from '@/constants/theme';
import { TOAST_MESSAGE_TYPE } from '@/constants/ToastMessageType';
import { handleToastMessage } from '@/helpers/handleShowToastMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod/v3';

const AddNew = () => {
    const { theme } = useTheme();

    const formSchema = z.object({
        mainContent: z
            .string()
            .min(5, 'Hero section main content must be at least 5 characters.')
            .max(60, 'Hero section main content must be at most 32 characters.'),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mainContent: '',
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // console.log(data);

        try {
            router.visit('hero-main', {
                method: 'post',
                data,
                preserveScroll: false,
                preserveState: false,
                onSuccess: () => {
                    // toast('Success');
                    handleToastMessage(TOAST_MESSAGE_TYPE.SUCCESS, 'New main content has been created.');
                    form.reset();
                },
                onError: (errors) => {
                    console.log(errors);
                    handleToastMessage(TOAST_MESSAGE_TYPE.ERROR, 'An error occured! Please try again...');
                },
            });
        } catch (error) {
            console.log(error);
            handleToastMessage(TOAST_MESSAGE_TYPE.ERROR, 'An error occured! Please try again...');
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className={`${theme == THEME.DARK ? '' : 'bg-logoPurple text-slate-200 transition-all hover:bg-logoPurpleHover hover:text-slate-50'}`}
                >
                    <Plus />
                    <span>Add New</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className={`text-xl ${theme == THEME.DARK ? 'text-slate-200' : 'text-logoPurple'}`}>Create New</DialogTitle>

                    <DialogDescription className={`${theme == THEME.DARK ? '' : 'text-logoPurple_300'}`}>
                        Make changes to your content here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <FieldGroup>
                            <TheTextInput
                                id="mainContent"
                                label="Main Content"
                                required
                                form={form}
                                placeholder="Enter you careers hero main content here..."
                            />
                        </FieldGroup>
                    </div>

                    <DialogFooter className="mt-5">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button className={`${theme == THEME.DARK ? '' : 'bg-logoPurple'}`} type="submit">
                            Submit
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddNew;
