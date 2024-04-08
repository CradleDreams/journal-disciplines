import * as React from 'react';
import {DataGrid, useGridApiRef} from '@mui/x-data-grid';
import {useState} from "react";
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";

const columns = [
  { field: 'id', headerName: '№', width: 70 },
  { field: 'initials', headerName: 'ФИО', width: 270 },
  {
    field: 'scores',
    headerName: 'Баллы',
    type: 'number',
    width: 90,
  }, {
    field: 'omissions',
    headerName: 'Пропуски',
    type: 'number',
    width: 90,
  },
  {
    field: 'practic1',
    headerName: 'Практическое задание 1',
    width: 200,
  },{
    field: 'practic2',
    headerName: 'Практическое задание 2',
    width: 200,
  },{
    field: 'practic3',
    headerName: 'Практическое задание 3',
    width: 200,
  },{
    field: 'practic4',
    headerName: 'Практическое задание 4',
    width: 200,
  },
];

let rows1 = [
  { id: 1, initials: 'Аметов Артём Сергеевич', scores: 20, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 2, initials: 'Белявский Глеб Борисович', scores: -20, omissions: 100, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'н' },
  { id: 3, initials: 'Васильченко Максим Юрьевич', scores: 0, omissions: 90, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'оп' },
  { id: 4, initials: 'Грошева Ольга Сергеевна', scores: 16, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 5, initials: 'Донскова Грета Анатольевна', scores: 15, omissions: 3, practic1: 'оп', practic2: 'н', practic3: 'п', practic4: 'п' },
  { id: 6, initials: 'Дорожкина Елизавета Алексеевна', scores: 13, omissions: 5, practic1: 'н', practic2: 'н', practic3: 'оп', practic4: 'оп' },
  { id: 7, initials: 'Зайцев Кирилл Сергеевич', scores: 20, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 8, initials: 'Изотова Валентина Дмитриевна', scores: 18, omissions: 1, practic1: 'п', practic2: 'оп', practic3: 'п', practic4: 'п' },
  { id: 9, initials: 'Колупов Сергей Андреевич', scores: 18, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'оп', practic4: 'п' },
];
let rows2 = [
  { id: 1, initials: 'Аметов Артём Сергеевич', scores: 0, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 2, initials: 'Белявский Глеб Борисович', scores: 0, omissions: 100, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'н' },
  { id: 3, initials: 'Васильченко Максим Юрьевич', scores: 0, omissions: 90, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'оп' },
  { id: 4, initials: 'Грошева Ольга Сергеевна', scores: 0, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 5, initials: 'Донскова Грета Анатольевна', scores: 15, omissions: 3, practic1: 'оп', practic2: 'н', practic3: 'п', practic4: 'п' },
  { id: 6, initials: 'Дорожкина Елизавета Алексеевна', scores: 0, omissions: 5, practic1: 'н', practic2: 'н', practic3: 'оп', practic4: 'оп' },
  { id: 7, initials: 'Зайцев Кирилл Сергеевич', scores: 0, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 8, initials: 'Изотова Валентина Дмитриевна', scores: 0, omissions: 1, practic1: 'п', practic2: 'оп', practic3: 'п', practic4: 'п' },
  { id: 9, initials: 'Колупов Сергей Андреевич', scores: 18, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'оп', practic4: 'п' },
];
let rows3 = [
  { id: 1, initials: 'Аметов Артём Сергеевич', scores: 0, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 2, initials: 'Белявский Глеб Борисович', scores: -20, omissions: 100, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'н' },
  { id: 3, initials: 'Васильченко Максим Юрьевич', scores: 0, omissions: 90, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'оп' },
  { id: 4, initials: 'Грошева Ольга Сергеевна', scores: 0, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 5, initials: 'Донскова Грета Анатольевна', scores: 15, omissions: 3, practic1: 'оп', practic2: 'н', practic3: 'п', practic4: 'п' },
  { id: 6, initials: 'Дорожкина Елизавета Алексеевна', scores: 13, omissions: 5, practic1: 'н', practic2: 'н', practic3: 'оп', practic4: 'оп' },
  { id: 7, initials: 'Зайцев Кирилл Сергеевич', scores: 0, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 8, initials: 'Изотова Валентина Дмитриевна', scores: 18, omissions: 1, practic1: 'п', practic2: 'оп', practic3: 'п', practic4: 'п' },
  { id: 9, initials: 'Колупов Сергей Андреевич', scores: 0, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'оп', practic4: 'п' },
];
let rows4 = [
  { id: 1, initials: 'Аметов Артём Сергеевич', scores: 0, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 2, initials: 'Белявский Глеб Борисович', scores: -200, omissions: 100, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'н' },
  { id: 3, initials: 'Васильченко Максим Юрьевич', scores: 0, omissions: 90, practic1: 'н', practic2: 'н', practic3: 'н', practic4: 'оп' },
  { id: 4, initials: 'Грошева Ольга Сергеевна', scores: 16, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 5, initials: 'Донскова Грета Анатольевна', scores: 0, omissions: 3, practic1: 'оп', practic2: 'н', practic3: 'п', practic4: 'п' },
  { id: 6, initials: 'Дорожкина Елизавета Алексеевна', scores: 13, omissions: 5, practic1: 'н', practic2: 'н', practic3: 'оп', practic4: 'оп' },
  { id: 7, initials: 'Зайцев Кирилл Сергеевич', scores: 0, omissions: 0, practic1: 'п', practic2: 'п', practic3: 'п', practic4: 'п' },
  { id: 8, initials: 'Изотова Валентина Дмитриевна', scores: 18, omissions: 1, practic1: 'п', practic2: 'оп', practic3: 'п', practic4: 'п' },
  { id: 9, initials: 'Колупов Сергей Андреевич', scores: 0, omissions: 1, practic1: 'п', practic2: 'п', practic3: 'оп', practic4: 'п' },
];
export const discipline = [
	{name: 'Веб разработка', prepod: 'Шаталова А.Ю.'},
	{name: 'Банковские информационные системы', prepod: 'Гобарева Я.Л.'},
	{name: 'Разработка приложений в системе 1C', prepod: 'Субботина О.Р.'},
	{name: 'Глубокое обучение', prepod: 'Ахмад Авс'},
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Disciplines() {
	const id = useParams();
	const rows = (+id === 1) ? rows1 : (+id === 2) ? rows2 : (+id === 3) ? rows3 : rows4
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState(rows)
  
  const apiRef = useGridApiRef();
  const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({
		defaultValues: {
			initials: 'Аметов Артём Сергеевич',
			scores: 20,
			omissions: 0,
			practic1: 'п',
			practic2: 'п',
			practic3: 'п',
			practic4: 'п',
		},
		mode: "onChange",
	});
  const onSubmit = async (values) => {
   const id = data.at(data.length-1).id+1
    setData(data.concat([{ id:id, ...values}]))

      handleClose()
	};
  return (
    <>
	    <center>
	    <h1>{discipline[+id.id-1].name}</h1>
	    <h2>{discipline[+id.id-1].prepod}</h2>
		    </center>
    <div style={{ height: 400, width: '100%'}}>
      <DataGrid
        apiRef={apiRef} {...data}
        rows={data}
        columns={columns}
        checkboxSelection
      />
      <Button onClick={() => {
        const list = [];
        Array.from(apiRef.current.getSelectedRows()).forEach((el) => list.push(el[1].id));
        setData(data.filter((element) => !list.includes(element.id)))
        console.log(list)
      }}>Удалить</Button>
      <Button onClick={handleOpen}>Добавить</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить студента
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{width: 250}}
							error={Boolean(errors.username?.message)}
							helperText={errors.username?.message}
							{...register("initials", {required: "Укажите ФИО"})}
							label='ФИО'/><br></br><br></br>
            <TextField
              sx={{width: 250}}
							error={Boolean(errors.username?.message)}
							helperText={errors.username?.message}
							{...register("scores", {required: "Укажите баллы"})}
							label='Баллы'/><br></br><br></br>
            <TextField
              sx={{width: 250}}
							error={Boolean(errors.username?.message)}
							helperText={errors.username?.message}
							{...register("omissions", {required: "Укажите пропуски"})}
							label='Пропуски'/><br></br><br></br>
            <TextField
              sx={{width: 250}}
							error={Boolean(errors.username?.message)}
							helperText={errors.username?.message}
							{...register("practic1", {required: "Укажите Практическое задание 1"})}
							label='Практическое задание 1'/><br></br><br></br>
            <TextField
              sx={{width: 250}}
							error={Boolean(errors.username?.message)}
							helperText={errors.username?.message}
							{...register("practic2", {required: "Укажите Практическое задание 2"})}
							label='Практическое задание 2'/><br></br><br></br>
            <TextField
              sx={{width: 250}}
							error={Boolean(errors.username?.message)}
							helperText={errors.username?.message}
							{...register("practic3", {required: "Укажите Практическое задание 3"})}
							label='Практическое задание 3'/><br></br><br></br>
            <TextField
              sx={{width: 250}}
							error={Boolean(errors.username?.message)}
							helperText={errors.username?.message}
							{...register("practic4", {required: "Укажите Практическое задание 4"})}
							label='Практическое задание 4'/><br></br><br></br>
            <Button
							disabled={!isValid}
							type="submit"
							size='large'>
							Добавить
						</Button><br></br>
          </form>
            </center>
        </Box>
      </Modal>
    </div>
	    </>
  );
}