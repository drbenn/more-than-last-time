import { Component, OnInit } from '@angular/core';
import {
  IExerciseType,
  IExerciseSelection,
  ISessionModel,
  previousSessions,
} from './current-exercise-input.model';

interface ddate {
  date: Date;
}

@Component({
  selector: 'app-current-exercise-input',
  templateUrl: './current-exercise-input.component.html',
  styleUrls: ['./current-exercise-input.component.scss'],
})
export class CurrentExerciseInputComponent implements OnInit {
  selectedExerciseType: string = '';
  selectedExercise: string = '';
  clearField = true;
  value = 'Clear me';
  dateNow = new Date();
  previousSets = [1, 2];
  workingSets = [1];
  workingRepInput: number = 0;
  workingWgtInput: number = 0;
  workingVolDisplay: number = 0;
  previousList = previousSessions;

  constructor() {}

  exerciseTypeSelection: IExerciseType[] = [
    { value: 'barbell-0', viewValue: 'Barbell' },
    { value: 'freeweight-1', viewValue: 'Free-Weight' },
    { value: 'machine-2', viewValue: 'Machine' },
    { value: 'bodyweight-3', viewValue: 'Body-Weight' },
    { value: 'kettlebell-4', viewValue: 'Kettlebell' },
  ];

  exerciseSelection: IExerciseSelection[] = [
    { value: 'barbell-0-squat', viewValue: 'Squat' },
    { value: 'barbell-1-deadlift', viewValue: 'Deadlift' },
    { value: 'barbell-2-benchpress', viewValue: 'Bench Press' },
    { value: 'barbell-3-clean', viewValue: 'Clean' },
  ];
  ngOnInit(): void {}

  test() {
    console.log('test');
    let jerry = new Date();
    let billy: ddate = { date: jerry };
    console.log(billy);

    console.log(this.previousList.exercise);
  }

  onSelectedExerciseType() {
    console.log(this.selectedExerciseType);
  }

  onSelectedExercise() {
    console.log(this.selectedExercise);
  }

  updateSetReps() {
    let repsForCalc = this.workingRepInput;
    let wgtForCalc = this.workingWgtInput;
    console.log(`r: ${repsForCalc}`);
    return this.onVolumeCalculation(repsForCalc, wgtForCalc);
  }

  updateSetWeight() {
    let repsForCalc = this.workingRepInput;
    let wgtForCalc = this.workingWgtInput;
    console.log(`w: ${wgtForCalc}`);
    return this.onVolumeCalculation(repsForCalc, wgtForCalc);
  }

  onVolumeCalculation(reps: number, weight: number) {
    let repsForCalc = reps;
    let wgtForCalc = weight;
    return (this.workingVolDisplay = repsForCalc * wgtForCalc);
  }

  addSet() {
    let workSetArr = this.workingSets;
    let volDisplay = this.workingVolDisplay;
    volDisplay !== 0
      ? workSetArr.push(workSetArr[workSetArr.length - 1] + 1)
      : alert('Must fill out current working set before adding new');
  }
}
