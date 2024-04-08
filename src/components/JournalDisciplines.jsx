import * as React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
export default function JournalDisciplines() {
  return (
		<div>
			<center>
			<h1>Список Дисциплин</h1>
			<Link to={'/1'}><Button size="large" variant="contained" sx={{width:600}}>Веб разработка</Button></Link><br/><br/>
			<Link to={'/2'}><Button size="large" variant="contained" sx={{width:600}}>Банковские информационные системы</Button></Link><br/><br/>
			<Link to={'/3'}><Button size="large" variant="contained" sx={{width:600}}>Разработка приложений в системе 1C</Button></Link><br/><br/>
			<Link to={'/4'}><Button size="large" variant="contained" sx={{width:600}}>Глубокое обучение</Button></Link>
				</center>
		</div>
  );
}
