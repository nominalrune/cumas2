import { AppData } from '@/Models/App/App';
import PrimaryButton from '../PrimaryButton';
import Button from '../Button';
import Input from '../Input';
import AppIconSelect from './AppIconSelect';
import type { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react';
import { MdDelete } from 'react-icons/md';

export default function AppEditHeader({ data, submitLabel, onChange, onCancel, onSubmit, onDelete }: { data: AppData, submitLabel:string, onChange: ChangeEventHandler, onCancel: MouseEventHandler, onSubmit: FormEventHandler, onDelete: MouseEventHandler }) {
    return <div className='flex gap-4 items-end'>
        <AppIconSelect value={data.icon} name="icon" className='max-w-6' onChange={onChange} />
        <Input label="アプリ名" type="text" name="name" className='text-3xl' value={data.name} onChange={onChange} />
        <Input label="アプリコード" required type="text" name="code" value={data.code} onChange={onChange} />
        <div className='flex-grow flex gap-4 justify-end'>
            <PrimaryButton type="button" onClick={onSubmit}>{submitLabel}</PrimaryButton>
            <Button type="button" onClick={onCancel}>キャンセル</Button>
            <Button className="pl-2 pr-2 text-white bg-red-600 hover:bg-red-500 hover:box-shadow" onClick={onDelete}><MdDelete className="text-xl" title="削除"/></Button>
        </div>
    </div>;
}
