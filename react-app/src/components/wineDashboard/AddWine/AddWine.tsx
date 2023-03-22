import React, { FC, useState } from 'react';
import { Wine } from '../../../Models/wine';
import WineForm from '../../forms/WineForm';

interface addWineProps {
  wineInfo: Wine;
}
// {wineInfo}: addWineProps
export default function AddWine () {


  return (
    <div style={{marginBottom:'100px', marginTop:'50px'}}>
        <h1>Add a new wine</h1>
        <WineForm></WineForm>
    </div>
  )
}
