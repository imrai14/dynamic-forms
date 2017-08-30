import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { KeyValidators } from './key-validators';

@Injectable()
export class QuestionControlService {
    
    constructor(private keyValidators: KeyValidators) { }
    

    toFormGroup(questions: QuestionBase<any>[]) {
        let group: any = {};

        questions.forEach(question => {            
            group[question.key] = question.required ? new FormControl(question.value || '', this.keyValidators.getValidator(question.key))
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}