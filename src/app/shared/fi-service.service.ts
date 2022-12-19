import { Injectable } from '@angular/core';
import { AllFillInQuestions } from './all-fill-in-questions';

@Injectable({
  providedIn: 'root'
})
export class FiServiceService {
  private fiquestions: AllFillInQuestions[];

  constructor() {
    this.fiquestions = [
      {
        id: 1,
        marker: "fi",
        question: 'Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).',
        solution: 'Answer: updatedb',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 2,
        marker: "fi",
        question: 'Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)',
        solution: 'Answer: df',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 3,
        marker: "fi",
        question: 'Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)',
        solution: 'Answer: cmdline',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 4,
        marker: "fi",
        question: 'Which program runs a command in specific intervals and refreshes the display of the program’s output? (Specify ONLY the command without any path or parameters.)',
        solution: 'Answer: watch',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 5,
        marker: "fi",
        question: 'Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)',
        solution: 'Answer: nice',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 6,
        marker: "fi",
        question: 'What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)',
        solution: 'Answer: /etc/yum.repos.d',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 7,
        marker: "fi",
        question: 'Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)',
        solution: 'Answer: /proc/mounts',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 8,
        marker: "fi",
        question: 'Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)',
        solution: 'Answer: jobs',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 9,
        marker: "fi",
        question: 'Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)',
        solution: 'Answer: renice',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 10,
        marker: "fi",
        question: 'Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)',
        solution: 'Answer: /etc/inittab',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
      {
        id: 11,
        marker: "fi",
        question: 'Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)',
        solution: 'Answer: /usr/local/bin',
        Uebersprungen: false,
        CorrectAnswer: false,
        WrongAnswered: false
      },
    ]
  }

  getAllFiQuest(): AllFillInQuestions[] {
    return this.fiquestions
  }
}
