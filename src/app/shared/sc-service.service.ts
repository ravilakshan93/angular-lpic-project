import { Injectable } from '@angular/core';
import { AllScQuestions } from './all-sc-questions';

@Injectable({
  providedIn: 'root'
})
export class ScServiceService {
  private scquestions : AllScQuestions[];
  constructor() {  
    this.scquestions =[
    {
      id: 1,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?',
      Answer: [
        {
          txt: 'A. XFS',
          choosen: false,
          right: false
        },
        {
          txt: 'B. VFAT',
          choosen: false,
          right: false
        },
        {
          txt: 'C. ext2',
          choosen: false,
          right: true
        },
        {
          txt: 'D. ext3',
          choosen: false,
          right: false
        },
        {
          txt: 'E. ext4',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 2,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?',
      Answer: [
        {
          txt: 'A. 0750',
          choosen: false,
          right: false
        },
        {
          txt: 'B. 0027',
          choosen: false,
          right: true
        },
        {
          txt: 'C. 0036',
          choosen: false,
          right: false
        },
        {
          txt: 'D. 7640',
          choosen: false,
          right: false
        },
        {
          txt: 'E. 0029',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 3,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?',
      Answer: [
        {
          txt: 'A. tune2fs -d 200 /dev/sda1',
          choosen: false,
          right: false
        },
        {
          txt: 'B. tune2fs -i 200 /dev/sda1',
          choosen: false,
          right: true
        },
        {
          txt: 'C. tune2fs -c 200 /dev/sda1',
          choosen: false,
          right: false
        },
        {
          txt: 'D. tune2fs -n 200 /dev/sda1',
          choosen: false,
          right: false
        },
        {
          txt: 'E. tune2fs --days 200 /dev/sda1',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 4,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which is the default percentage of reserved space for the root user on new ext4 filesystems?',
      Answer: [
        {
          txt: 'A. 10%',
          choosen: false,
          right: false
        },
        {
          txt: 'B. 3%',
          choosen: false,
          right: false
        },
        {
          txt: 'C. 15%',
          choosen: false,
          right: false
        },
        {
          txt: 'D. 0%',
          choosen: false,
          right: false
        },
        {
          txt: 'E. 5%',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 5,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?',
      Answer: [
        {
          txt: 'A. systemd ignores any manual mounts which are not done using the systemctl mount command',
          choosen: false,
          right: false
        },
        {
          txt: 'B. The command systemctl mountsync can be used to create a mount unit based on the existing mount',
          choosen: false,
          right: false
        },
        {
          txt: 'C. systemd automatically generates a mount unit and monitors the mount point without changing it',
          choosen: false,
          right: true
        },
        {
          txt: 'D. Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time',
          choosen: false,
          right: false
        },
        {
          txt: 'E. systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 6,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What does the command mount --bind do?',
      Answer: [
        {
          txt: 'A. It makes the contents of one directory available in another directory',
          choosen: false,
          right: false
        },
        {
          txt: 'B. It mounts all available filesystems to the current directory',
          choosen: false,
          right: false
        },
        {
          txt: 'C. It mounts all user mountable filesystems to the user’s home directory',
          choosen: false,
          right: true
        },
        {
          txt: 'D. It mounts all file systems listed in /etc/fstab which have the option userbindset',
          choosen: false,
          right: false
        },
        {
          txt: 'E. It permanently mounts a regular file to a directory',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 7,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which chown command changes the ownership to dave and the group to staff on a file named data.txt?',
      Answer: [
        {
          txt: 'A. chown dave/staff data.txt',
          choosen: false,
          right: false
        },
        {
          txt:  'B. chown -u dave -g staff data.txt',
          choosen: false,
          right: false
        },
        {
          txt:  'C. chown --user dave --group staff data.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'D. chown dave+staff data.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'E. chown dave:staff data.txt',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 8,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'When considering the use of hard links, what are valid reasons not to use hard links?',
      Answer: [
        {
          txt: 'A. Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them',
          choosen: false,
          right: false
        },
        {
          txt:  'B. Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content',
          choosen: false,
          right: false
        },
        {
          txt:  'C. Hard links are specific to one filesystem and cannot point to files on another filesystem',
          choosen: false,
          right: true
        },
        {
          txt: 'D. If users other than root should be able to create hard links, suln has to be installed and configured',
          choosen: false,
          right: false
        },
        {
          txt: 'E. When a hard linked file is changed, a copy of the file is created and consumes additional space',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 9,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'In compliance with the FHS, in which of the directories are man pages found?',
      Answer: [
        {
          txt: 'A. /opt/man/',
          choosen: false,
          right: false
        },
        {
          txt: 'B. /usr/doc/',
          choosen: false,
          right: false
        },
        {
          txt: 'C. /usr/share/man/',
          choosen: false,
          right: true
        },
        {
          txt: 'D. /var/pkg/man',
          choosen: false,
          right: false
        },
        {
          txt: 'E. /var/man/',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 10,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the process ID number of the init process on a System V init based system?', 
      Answer: [
        {
          txt: 'A. -1',
          choosen: false,
          right: false
        },
        {
          txt: 'B. 0',
          choosen: false,
          right: false
        },
        {
          txt: 'C. 1',
          choosen: false,
          right: true
        },
        {
          txt: 'D. It is different with each reboot',
          choosen: false,
          right: false
        },
        {
          txt: 'E. It is set to the current run level',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 11,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which daemon handles power management events on a Linux system?',
      Answer: [
        {
          txt: 'A. acpid',
          choosen: false,
          right: true
        },
        {
          txt: 'B. batteryd',
          choosen: false,
          right: false
        },
        {
          txt: 'C. pwrmgntd',
          choosen: false,
          right: false
        },
        {
          txt: 'D. psd',
          choosen: false,
          right: false
        },
        {
          txt: 'E. inetd',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 12,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?',
      Answer: [
        {
          txt: 'A. Using lsmod --remove --autocleanwithout specifying the name of a specific module',
          choosen: false,
          right: false
        },
        {
          txt: 'B. Using modinfo -kfollowed by the name of the offending module',
          choosen: false,
          right: false
        },
        {
          txt: 'C. Using modprobe -rfollowed by the name of the offending module',
          choosen: false,
          right: false
        },
        {
          txt: 'D. Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf',
          choosen: false,
          right: true
        },
        {
          txt: 'E. Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 13,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the first program the Linux kernel starts at boot time when using System V init?',
      Answer: [
        {
          txt: 'A. /lib/init.so',
          choosen: false,
          right: false
        },
        {
          txt: 'B. /proc/sys/kernel/init',
          choosen: false,
          right: false
        },
        {
          txt: 'C. /etc/rc.d/rcinit',
          choosen: false,
          right: false
        },
        {
          txt: 'D. /sbin/init',
          choosen: false,
          right: true
        },
        {
          txt: 'E. /boot/init',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 14,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?',
      Answer: [
        {
          txt: 'A. apt-get search /etc/debian_version',
          choosen: false,
          right: false
        },
        {
          txt: 'B. apt -r /etc/debian_version',
          choosen: false,
          right: false
        },
        {
          txt: 'C. find /etc/debian_version -dpkg',
          choosen: false,
          right: false
        },
        {
          txt:  'D. dpkg -S  /etc/debian_version',
          choosen: false,
          right: true
        },
        {
          txt: 'E. apt-file /etc/debian_version',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 15,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is contained on the EFI System Partition?',
      Answer: [
        {
          txt: 'A. The Linux root file system',
          choosen: false,
          right: false
        },
        {
          txt: 'B. The first stage boot loader',
          choosen: false,
          right: true
        },
        {
          txt: 'C. The default swap space file',
          choosen: false,
          right: false
        },
        {
          txt:   'D. The Linux default shell binaries',
          choosen: false,
          right: false
        },
        {
          txt: 'E. The user home directories',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 16,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?',
      Answer: [
        {
          txt: 'A. grub2 install /dev/sdc',
          choosen: false,
          right: false
        },
        {
          txt: 'B. grub-mkrescue /dev/sdc',
          choosen: false,
          right: false
        },
        {
          txt: 'C. grub-mbrinstall /dev/sdc',
          choosen: false,
          right: false
        },
        {
          txt:  'D. grub-setup /dev/sdc',
          choosen: false,
          right: false
        },
        {
          txt: 'E. grub-install /dev/sdc',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 17,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?',
      Answer: [
        {
          txt: 'A. 7',
          choosen: false,
          right: false
        },
        {
          txt: 'B. 82',
          choosen: false,
          right: true
        },
        {
          txt: 'C. 83',
          choosen: false,
          right: false
        },
        {
          txt:  'D. 8e',
          choosen: false,
          right: false
        },
        {
          txt: 'E. fd',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 18,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following apt-get subcommands installs the newest versions of all currently installed packages?',
      Answer: [
        {
          txt: 'A. auto-update',
          choosen: false,
          right: false
        },
        {
          txt: 'B. dist-upgrade',
          choosen: false,
          right: true
        },
        {
          txt: 'C. full-upgrade',
          choosen: false,
          right: false
        },
        {
          txt: 'D. install',
          choosen: false,
          right: false
        },
        {
          txt:  'E. update',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 19,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which command uninstalls a package but keeps its configuration files in case the package is re-installed?',
      Answer: [
        {
          txt: 'A. dpkg -s pkgname',
          choosen: false,
          right: false
        },
        {
          txt: 'B. dpkg -L pkgname',
          choosen: false,
          right: false
        },
        {
          txt: 'C. dpkg -P pkgname',
          choosen: false,
          right: false
        },
        {
          txt: 'D. dpkg -v pkgname',
          choosen: false,
          right: false
        },
        {
          txt: 'E. dpkg -r pkgname',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 20,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands lists the dependencies of the RPM package file foo.rpm?',
      Answer: [
        {
          txt: 'A. rpm -qpR foo.rpm',
          choosen: false,
          right: true
        },
        {
          txt: 'B. rpm -dep foo',
          choosen: false,
          right: false
        },
        {
          txt: 'C. rpm -ld foo.rpm',
          choosen: false,
          right: false
        },
        {
          txt: 'D. rpm -R foo.rpm',
          choosen: false,
          right: false
        },
        {
          txt: 'E. rpm -pD foo',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 21,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?',
      Answer: [
        {
          txt: 'A. 9',
          choosen: false,
          right: false
        },
        {
          txt: 'B. 15',
          choosen: false,
          right: false
        },
        {
          txt:  'C. 19',
          choosen: false,
          right: true
        },
        {
          txt: 'D. 49',
          choosen: false,
          right: false
        },
        {
          txt: 'E. 99',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 22,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following vi commands deletes two lines, the current and the following line?',
      Answer: [
        {
          txt: 'A. d2',
          choosen: false,
          right: false
        },
        {
          txt: 'B. 2d',
          choosen: false,
          right: false
        },
        {
          txt: 'C. 2dd',
          choosen: false,
          right: true
        },
        {
          txt: 'D. dd2',
          choosen: false,
          right: false
        },
        {
          txt: 'E. de12',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id:23,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the program, logs out?',
      Answer: [
        {
          txt: 'A. job -b dmaint',
          choosen: false,
          right: false
        },
        {
          txt: 'B. dbmaint &>/dev/pts/null',
          choosen: false,
          right: false
        },
        {
          txt: 'C. nohup dbmaint &',
          choosen: false,
          right: true
        },
        {
          txt: 'D. bg dbmaint',
          choosen: false,
          right: false
        },
        {
          txt: 'E. wait dbmaint',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id:24,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?',
      Answer: [
        {
          txt: 'A. i (lowercase)',
          choosen: false,
          right: false
        },
        {
          txt:  'B. p (lowercase)',
          choosen: false,
          right: true
        },
        {
          txt: 'C. P (uppercase)',
          choosen: false,
          right: false
        },
        {
          txt: 'D. U (uppercase)',
          choosen: false,
          right: false
        },
        {
          txt: 'E. u (lowercase)',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 25, 
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?',
      Answer: [
        {
          txt: `A. tr -d '\r' < userlist.txt > newlist.txt`,
          choosen: false,
          right: true
        },
        {
          txt: `B. tr -c '\n\r' '' <newlist.txt> userlist.txt`,
          choosen: false,
          right: false
        },
        {
          txt: `C. tr '\r\n' '' <userlist.txt> newlist.txt`,
          choosen: false,
          right: false
        },
        {
          txt: `D. tr '\r' '\n' userlist.txt newlist.txt`,
          choosen: false,
          right: false
        },
        {
          txt: `E. tr -s '/^M/^J/' userlist.txt newlist.txt`,
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 26,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Given the following input stream: txt1.txt atxt.txt txtB.txt Which of the following regular expressions turns this input stream into the following output stream? txt1.bak.txt atxt.bak.txt txtB.bak.txt',
      Answer: [
        {
          txt: 'A. s/^.txt/.bak/',
          choosen: false,
          right: false
        },
        {
          txt: 'B. s/txt/bak.txt/',
          choosen: false,
          right: false
        },
        {
          txt: 'C. s/txt$/bak.txt',
          choosen: false,
          right: true
        },
        {
          txt: 'D. s/^txt$/.bak^/',
          choosen: false,
          right: false
        },
        {
          txt: 'E. s/[.txt]/.bak$1/',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 27,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which command must be entered before exiting vi to save the current file as filea.txt?',
      Answer: [
        {
          txt: 'A. %s filea.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'B. %w filea.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'C. :save filea.txt',
          choosen: false,
          right: false
        },
        {
          txt:  'D. :w filea.txt',
          choosen: false,
          right: true
        },
        {
          txt: 'E. :s filea.txt',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 28,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?',
      Answer: [
        {
          txt: 'A. SIGTERM',
          choosen: false,
          right: false
        },
        {
          txt: 'B. SIGCONT',
          choosen: false,
          right: false
        },
        {
          txt: 'C. SIGSTOP',
          choosen: false,
          right: false
        },
        {
          txt: 'D. SIGKILL',
          choosen: false,
          right: false
        },
        {
          txt: 'E. SIGINT',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 29,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?',
      Answer: [
        {
          txt: 'A. foo | less /tmp/foodata',
          choosen: false,
          right: false
        },
        {
          txt: 'B. foo | cp /tmp/foodata',
          choosen: false,
          right: false
        },
        {
          txt: 'C. foo > /tmp/foodata',
          choosen: false,
          right: false
        },
        {
          txt: 'D. foo | tee /tmp/foodata',
          choosen: false,
          right: true
        },
        {
          txt: 'E. foo > stdout >> /tmp/foodata',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 30,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What output will be displayed when the user fred executes the following command? echo `fred $USER’',
      Answer: [
        {
          txt: 'A. fred fred',
          choosen: false,
          right: false
        },
        {
          txt: 'B. fred /home/fred/',
          choosen: false,
          right: false
        },
        {
          txt: 'C. `fred $USER` ',
          choosen: false,
          right: false
        },
        {
          txt: 'D. fred $USER',
          choosen: false,
          right: true
        },
        {
          txt: 'E. `fred fred`',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 31,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?',
      Answer: [
        {
          txt: 'A. lsattr foo',
          choosen: false,
          right: false
        },
        {
          txt: 'B. apropos foo',
          choosen: false,
          right: false
        },
        {
          txt: 'C. locate foo',
          choosen: false,
          right: false
        },
        {
          txt: 'D. whatis foo',
          choosen: false,
          right: false
        },
        {
          txt: 'E. which foo',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 32,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?',
      Answer: [
        {
          txt: 'A. -rep-space',
          choosen: false,
          right: false
        },
        {
          txt: 'B. -printnul',
          choosen: false,
          right: false
        },
        {
          txt: 'C. -nospace',
          choosen: false,
          right: false
        },
        {
          txt: 'D. -ignore-space',
          choosen: false,
          right: false
        },
        {
          txt: 'E. -print0',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 33,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is true regarding the command ls > files if files does not exist?',
      Answer: [
        {
          txt: 'A. The output of ls is printed to the terminal',
          choosen: false,
          right: false
        },
        {
          txt: 'B. files is created and contains the output of ls',
          choosen: false,
          right: true
        },
        {
          txt: 'C. An error message is shown and ls is not executed',
          choosen: false,
          right: false
        },
        {
          txt: 'D. The command files is executed and receives the output of ls',
          choosen: false,
          right: false
        },
        {
          txt: 'E. Any output of ls is discarded',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 34,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following files, located in a user`s home directory, contains the Bash history?',
      Answer: [
        {
          txt: 'A. .bashrc_history',
          choosen: false,
          right: false
        },
        {
          txt: 'B. .bash_histfile',
          choosen: false,
          right: false
        },
        {
          txt: 'C. .history',
          choosen: false,
          right: false
        },
        {
          txt: 'D. .bash_history',
          choosen: false,
          right: true
        },
        {
          txt: 'E. .history_bash',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 35,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands displays the contents of a gzip compressed tar archive?',
      Answer: [
        {
          txt: 'A. gzip archive.tgz | tar xvf',
          choosen: false,
          right: false
        },
        {
          txt: 'B. tar -fzt archive.tgz',
          choosen: false,
          right: false
        },
        {
          txt: 'C. gzip -d archive.tgz | tar tvf',
          choosen: false,
          right: false
        },
        {
          txt: 'D. tar cf archive.tgz',
          choosen: false,
          right: false
        },
        {
          txt: 'E. tar ztf archive.tgz',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 36,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following regular expressions represents a single upper-case letter?',
      Answer: [
        {
          txt: 'A. :UPPER:',
          choosen: false,
          right: false
        },
        {
          txt: 'B. [A-Z]',
          choosen: false,
          right: false
        },
        {
          txt:  'C. !a-z',
          choosen: false,
          right: false
        },
        {
          txt: 'D. %C',
          choosen: false,
          right: false
        },
        {
          txt: 'E. {AZ}',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 37,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?',
      Answer: [
        {
          txt: 'A. grep -E `:08:[09]+:[09]+` loga.log',
          choosen: false,
          right: false
        },
        {
          txt: 'B. grep -E `:08:[00]+` loga.log',
          choosen: false,
          right: false
        },
        {
          txt: 'C. grep -E loga.log `:08:[0-9]+:[0-9]',
          choosen: false,
          right: false
        },
        {
          txt: 'D. grep loga.log `:08:[0-9]:[0-9]',
          choosen: false,
          right: false
        },
        {
          txt: 'E. grep -E `:08:[0-9]+:[0-9]+ loga.log`',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 38,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'A yum repository can declare sets of related packages. Which yum command installs all packages belonging to the group admintools?',
      Answer: [
        {
          txt: 'A. yum pkgsel --install admintools',
          choosen: false,
          right: false
        },
        {
          txt: 'B. yum install admintools',
          choosen: false,
          right: false
        },
        {
          txt: 'C. yum groupinstall admintools',
          choosen: false,
          right: true
        },
        {
          txt: 'D. yum taskinstall admintools',
          choosen: false,
          right: false
        },
        {
          txt: 'E. yum collection install admintools',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 39, 
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?',
      Answer: [
        {
          txt: 'A. grub-install /dev/sda',
          choosen: false,
          right: false
        },
        {
          txt: 'B. grub-install /dev/sda1',
          choosen: false,
          right: true
        },
        {
          txt: 'C. grub-install current /dev/sda0',
          choosen: false,
          right: false
        },
        {
          txt: 'D. grub-install /dev/sda0',
          choosen: false,
          right: false
        },
        {
          txt: 'E. grub-install current /dev/sda1',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 40,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which file defines the network locations from where the Debian package manager downloads software packages?',
      Answer: [
        {
          txt: 'A. /etc/dpkg/dpkg.cfg',
          choosen: false,
          right: false
        },
        {
          txt: 'B. /etc/apt/apt.conf.d',
          choosen: false,
          right: false
        },
        {
          txt: 'C. /etc/apt/apt.conf',
          choosen: false,
          right: false
        },
        {
          txt: 'D. /etc/dpkg/dselect.cfg',
          choosen: false,
          right: false
        },
        {
          txt: 'E. /etc/apt/sources.list',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 41,  
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?',
      Answer: [
        {
          txt: 'A. --clean',
          choosen: false,
          right: false
        },
        {
          txt:'B. --purge',
          choosen: false,
          right: true
        },
        {
          txt: 'C. --vacuum',
          choosen: false,
          right: false
        },
        {
          txt: 'D. --remove',
          choosen: false,
          right: false
        },
        {
          txt: 'E. --declare',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 42,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?',
      Answer: [
        {
          txt: 'A. dpkg --fix --all',
          choosen: false,
          right: false
        },
        {
          txt:'B. apt-get autoinstall',
          choosen: false,
          right: false
        },
        {
          txt: 'C. dpkg-reconfigure --all',
          choosen: false,
          right: false
        },
        {
          txt: 'D. apt-get all',
          choosen: false,
          right: false
        },
        {
          txt: 'E. apt-get install -f',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 43,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands lists all currently installed packages when using RPM package management?',
      Answer: [
        {
          txt: 'A. yum --query --all',
          choosen: false,
          right: false
        },
        {
          txt:'B. yum --list --installed',
          choosen: false,
          right: false
        },
        {
          txt: 'C. rpm --query --list',
          choosen: false,
          right: false
        },
        {
          txt: 'D. rpm --list --installed',
          choosen: false,
          right: false
        },
        {
          txt: 'E. rpm --query --all',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 44,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the purpose of the ldd command?',
      Answer: [
        {
          txt: 'A. It lists which shared libraries a binary needs to run.',
          choosen: false,
          right: true
        },
        {
          txt:'B. It installs and updates installed shared libraries.',
          choosen: false,
          right: false
        },
        {
          txt: 'C. It turns a dynamically linked binary into a static binary.',
          choosen: false,
          right: false
        },
        {
          txt:  'D. It defines which version of a library should be used by default.',
          choosen: false,
          right: false
        },
        {
          txt:  'E. It runs a binary with an alternate library search path.',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 45 ,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'How many fields are in a syntactically correct line of /etc/fstab?',
      Answer: [
        {
          txt:'A. 3',
          choosen: false,
          right: false
        },
        {
          txt:'B. 4',
          choosen: false,
          right: false
        },
        {
          txt: 'C. 5',
          choosen: false,
          right: false
        },
        {
          txt: 'D. 6',
          choosen: false,
          right: true
        },
        {
          txt: 'E. 7',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 46,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands sets the SetUID permission on the executable /bin/foo?',
      Answer: [
        {
          txt: 'A. chmod 4755 /bin/foo',
          choosen: false,
          right: true
        },
        {
          txt: 'B. chmod 1755 /bin/foo',
          choosen: false,
          right: false
        },
        {
          txt: 'C. chmod u-s /bin/foo',
          choosen: false,
          right: false
        },
        {
          txt: 'D. chmod 755+s /bin/foo',
          choosen: false,
          right: false
        },
        {
          txt:  'E. chmod 2755 /bin/foo',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 47,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?',
      Answer: [
        {
          txt: 'A. 0017',
          choosen: false,
          right: false
        },
        {
          txt:'B. 0640',
          choosen: false,
          right: false
        },
        {
          txt: 'C. 0038',
          choosen: false,
          right: false
        },
        {
          txt: 'D. 0227',
          choosen: false,
          right: false
        },
        {
          txt: 'E. 0027',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 48,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'After a power outage, the XFS file system of /dev/sda3 is inconsistent. How can the existing file system errors be fixed?',
      Answer: [
        {
          txt: 'A. By using mount -f to force a mount of the file system',
          choosen: false,
          right: false
        },
        {
          txt:'B. By running xfsck on the file system',
          choosen: false,
          right: false
        },
        {
          txt: 'C. By mounting the file system with the option xfs_repair',
          choosen: false,
          right: false
        },
        {
          txt: 'D. By running xfsadmin repairon the file system',
          choosen: false,
          right: false
        },
        {
          txt: 'E. By running xfs_repair on the file system',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 49,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following properties of an existing file changes when a hard link pointing to that file is created?',
      Answer: [
        {
          txt: 'A. File size',
          choosen: false,
          right: false
        },
        {
          txt: 'B. Link count',
          choosen: false,
          right: true
        },
        {
          txt: 'C. Modify timestamp',
          choosen: false,
          right: false
        },
        {
          txt: 'D. Inode number',
          choosen: false,
          right: false
        },
        {
          txt: 'E. Permissions',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 50,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'After a power outage, the XFS file system of /dev/sda3 is inconsistent. How can the existing file system errors be fixed?',
      Answer: [
        {
          txt: 'A. where',
          choosen: false,
          right: false
        },
        {
          txt:'B. type',
          choosen: false,
          right: true
        },
        {
          txt: 'C. stat',
          choosen: false,
          right: false
        },
        {
          txt: 'D. case',
          choosen: false,
          right: false
        },
        {
          txt: 'E. fileinfo',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 51,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'When in Normal mode in vi, which character can be used to begin a reverse search of the text?',
      Answer: [
        {
          txt: 'A. r',
          choosen: false,
          right: false
        },
        {
          txt: 'B. /',
          choosen: false,
          right: false
        },
        {
          txt:  'C. F',
          choosen: false,
          right: false
        },
        {
          txt: 'D. ?',
          choosen: false,
          right: true
        },
        {
          txt: 'E. s',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 52,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands displays the manual page command from section 1?',
      Answer: [
        {
          txt: 'A. man command(1)',
          choosen: false,
          right: false
        },
        {
          txt:'B. man command@1',
          choosen: false,
          right: false
        },
        {
          txt: 'C. man 1 command',
          choosen: false,
          right: true
        },
        {
          txt: 'D. man 1.command',
          choosen: false,
          right: false
        },
        {
          txt: 'E. man -s 1 command',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 53,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands creates or, in case it already exists, overwrites a file called data withthe output of ls?',
      Answer: [
        {
          txt: 'A. ls 3> data',
          choosen: false,
          right: false
        },
        {
          txt:'B. ls >& data',
          choosen: false,
          right: false
        },
        {
          txt: 'C. ls > data',
          choosen: false,
          right: true
        },
        {
          txt: 'D. ls >> data',
          choosen: false,
          right: false
        },
        {
          txt: 'E. ls >>> data',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 54,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands is used to change options and positional parameters within arunning Bash shell?',
      Answer: [
        {
          txt: 'A. history',
          choosen: false,
          right: false
        },
        {
          txt:'B. man command@1',
          choosen: false,
          right: false
        },
        {
          txt: 'C. bashconf',
          choosen: false,
          right: true
        },
        {
          txt: 'D. set',
          choosen: false,
          right: true
        },
        {
          txt: 'E. envsetup',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 55,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the effect of the -v option for the grep command?',
      Answer: [
        {
          txt: 'A. It enables color to highlight matching parts.',
          choosen: false,
          right: false
        },
        {
          txt:'B. It shows the command`s version information.',
          choosen: false,
          right: false
        },
        {
          txt: 'C. It only outputs non-matching lines.',
          choosen: false,
          right: true
        },
        {
          txt:  'D. It changes the output order showing the last matching line first.',
          choosen: false,
          right: false
        },
        {
          txt: 'E. It outputs all lines and prefixes matching lines with a+.',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 56,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on thekeyboard?',
      Answer: [
        {
          txt: 'A. SIGTERM',
          choosen: false,
          right: false
        },
        {
          txt:'B. SIGCONT',
          choosen: false,
          right: false
        },
        {
          txt: 'C. SIGSTOP',
          choosen: false,
          right: true
        },
        {
          txt: 'D. SIGKILL',
          choosen: false,
          right: false
        },
        {
          txt: 'E. SIGINT',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 57,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands outputs test to the shell?',
      Answer: [
        {
          txt: 'A.  cat <!EOT test EOT',
          choosen: false,
          right: false
        },
        {
          txt:'B.  cat <|EOT',
          choosen: false,
          right: false
        },
        {
          txt:'C.  cat !<EOT',
          choosen: false,
          right: false
        },
        {
          txt: 'D.  cat &<EOT',
          choosen: false,
          right: false
        },
        {
          txt: 'E.  cat <<EOT',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 58,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the output when the regular expression `s/[ABC][abc]/xx/` is applied to the following string? ABCabc',
      Answer: [
        {
          txt: 'A. ABxxbc',
          choosen: false,
          right: true
        },
        {
          txt: 'B. xxCxxc',
          choosen: false,
          right: false
        },
        {
          txt: 'C. xxxxxx',
          choosen: false,
          right: false
        },
        {
          txt: 'D. ABCabc',
          choosen: false,
          right: false
        },
        {
          txt: 'E. Axxaxx',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 59,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the default nice level when a process is started using the nice command?',
      Answer: [
        {
          txt: 'A. -10',
          choosen: false,
          right: false
        },
        {
          txt: 'B. 0',
          choosen: false,
          right: false
        },
        {
          txt: 'C. 10',
          choosen: false,
          right: true
        },
        {
          txt: 'D. 15',
          choosen: false,
          right: false
        },
        {
          txt:  'E. 20',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 60,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'A user accidentally created the subdirectory \dir in his home directory. Which of the following commands will remove that directory?',
      Answer: [
        {
          txt: 'A. rmdir `~/\\dir`',
          choosen: false,
          right: true
        },
        {
          txt: 'B. rmdir `~/\dir`',
          choosen: false,
          right: false
        },
        {
          txt: 'C. rmdir ~/`dir`',
          choosen: false,
          right: false
        },
        {
          txt: 'D. rmdir `~/\dir`',
          choosen: false,
          right: false
        },
        {
          txt: 'E. rmdir `~/\dir`',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 61,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands can perform searches on file contents using regular expressions?',
      Answer: [
        {
          txt: 'A. find',
          choosen: false,
          right: false
        },
        {
          txt: 'B. locate',
          choosen: false,
          right: false
        },
        {
          txt: 'C. grep',
          choosen: false,
          right: true
        },
        {
          txt: 'D. reggrep',
          choosen: false,
          right: false
        },
        {
          txt: 'E. pgrep',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 62,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?',
      Answer: [
        {
          txt: 'A. -maxdepth',
          choosen: false,
          right: true
        },
        {
          txt: 'B. -dirmax',
          choosen: false,
          right: false
        },
        {
          txt: 'C. -maxlevels',
          choosen: false,
          right: false
        },
        {
          txt: 'D. -s',
          choosen: false,
          right: false
        },
        {
          txt: 'E. -n',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 63,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands determines a file’s format by using a definition database file which contains information about all common file types?',
      Answer: [
        {
          txt: 'A. type',
          choosen: false,
          right: false
        },
        {
          txt: 'B. file',
          choosen: false,
          right: true
        },
        {
          txt: 'C. magic',
          choosen: false,
          right: false
        },
        {
          txt: 'D. pmagic',
          choosen: false,
          right: false
        },
        {
          txt: 'E. hash',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 64,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands generates a list of user names from /etc/passwd along with their login shell?',
      Answer: [
        {
          txt: 'A. column -s : 1,7 /etc/passwd',
          choosen: false,
          right: false
        },
        {
          txt: 'B. chop -c 1,7 /etc/passwd',
          choosen: false,
          right: false
        },
        {
          txt: 'C. colrm 1,7 /etc/passwd',
          choosen: false,
          right: false
        },
        {
          txt: 'D. sort -t: -k1,7 /etc/passwd',
          choosen: false,
          right: false
        },
        {
          txt: 'E. cut -d: -f1,7 /etc/passwd',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 65,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present in the current directory after running gunzip texts.tgz?',
      Answer: [
        {
          txt: 'A. Only a.txt, b.txt, and texts.tgz',
          choosen: false,
          right: false
        },
        {
          txt: 'B. Only texts.tar and texts.tgz',
          choosen: false,
          right: false
        },
        {
          txt: 'C. Only a.txt.gz and b.txt.gz',
          choosen: false,
          right: false
        },
        {
          txt: 'D. Only a.txt and b.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'E. Only texts.tar',
          choosen: false,
          right: true
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 66,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?',
      Answer: [
        {
          txt: 'A. By using the command :repeat followed by the number and the command',
          choosen: false,
          right: true
        },
        {
          txt: 'B. By specifying the number right in front of a command such as 4l or 2yj.',
          choosen: false,
          right: true
        },
        {
          txt: 'C. By selecting all affected lines using the shit and cursor keys before applying the command.',
          choosen: false,
          right: false
        },
        {
          txt: 'D. By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.',
          choosen: false,
          right: false
        },
        {
          txt: 'E. By specifying the number after a command such as l4 or yj2 followed by escape.',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 67,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following statements is correct for a command ending with an & character?',
      Answer: [
        {
          txt: 'A. The command`s output is redirected to /dev/null.',
          choosen: false,
          right: false
        },
        {
          txt: 'B. The command is run in background of the current shell.',
          choosen: false,
          right: true
        },
        {
          txt: 'C. The command`s output is executed by the shell.',
          choosen: false,
          right: false
        },
        {
          txt: 'D. The command is run as a direct child of the init process.',
          choosen: false,
          right: false
        },
        {
          txt: 'E. The command`s input is read from /dev/null.',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 68,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands reads a file and creates separate chunks of a given size from the file’s contents?',
      Answer: [
        {
          txt: 'A. ar',
          choosen: false,
          right: false
        },
        {
          txt: 'B. cat',
          choosen: false,
          right: false
        },
        {
          txt: 'C. break',
          choosen: false,
          right: false
        },
        {
          txt: 'D. split',
          choosen: false,
          right: true
        },
        {
          txt: 'E. parted',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 69,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the purpose of the xargs command?',
      Answer: [
        {
          txt: 'A. It passes arguments to an X server.',
          choosen: false,
          right: true
        },
        {
          txt: 'B. It repeats the execution of a command using different parameters for each invocation.',
          choosen: false,
          right: false
        },
        {
          txt: 'C. It reads standard input and builds up commands to execute.',
          choosen: false,
          right: false
        },
        {
          txt: 'D. It asks a question, graphically, and returns the answer to the shell.',
          choosen: false,
          right: false
        },
        {
          txt: 'E. It allows specifying long options (like --help) for commands that normally only accept short options (like -h)',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false

    },
    {
      id: 70,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'In Bash, inserting 1>&2 after a command redirects…',
      Answer: [
        {
          txt: 'A. …standard error to standard input.',
          choosen: false,
          right: false
        },
        {
          txt: 'B. …standard output to standard error.',
          choosen: false,
          right: true
        },
        {
          txt: 'C. …standard input to standard error.',
          choosen: false,
          right: false
        },
        {
          txt: 'D. …standard error to standard output.',
          choosen: false,
          right: false
        },
        {
          txt: 'E. …standard output to standard input.',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 71,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?',
      Answer: [
        {
          txt: 'A. Using the dmesg command from the rescue CD`s shell to view the original system`s boot logs.',
          choosen: false,
          right: false
        },
        {
          txt: 'B. Investigating the file /proc/kmsg on the computer`s hard disk for possible errors.',
          choosen: false,
          right: false
        },
        {
          txt: 'C. Investigating the files in /var/log on the computer`s hard disk for possible errors.',
          choosen: false,
          right: true
        },
        {
          txt: 'D. Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.',
          choosen: false,
          right: false
        },
        {
          txt: 'E. Rebooting again from the hard drive since the system successfully booted from the rescue CD.',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 72,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Where is the bootloader stored on the hard disk of a UEFI system?',
      Answer: [
        {
          txt: 'A. In the EFI Boot Record (EBR).',
          choosen: false,
          right: false
        },
        {
          txt: 'B. In the Master Boot Record (MBR).',
          choosen: false,
          right: false
        },
        {
          txt: 'C. On the EFI System Partition (ESP).',
          choosen: false,
          right: false
        },
        {
          txt: 'D. On the partition labeled boot.',
          choosen: false,
          right: true
        },
        {
          txt: 'E. On the partition number 127.',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 73,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'What is the correct way to set the default systemd boot target to multi-user??',
      Answer: [
        {
          txt: 'A. systemctl isolate multi-user.target',
          choosen: false,
          right: false
        },
        {
          txt: 'B. systemctl set-runlevel multi-user.target',
          choosen: false,
          right: false
        },
        {
          txt: 'C. systemctl set-boot multi-user.target',
          choosen: false,
          right: false
        },
        {
          txt: 'D. systemctl set-default multi-user.target',
          choosen: false,
          right: true
        },
        {
          txt: 'E. systemctl boot -p multi-user.target',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 74,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands loads a kernel module along with any required dependency modules?',
      Answer: [
        {
          txt: 'A. depmod',
          choosen: false,
          right: false
        },
        {
          txt: 'B. modprobe',
          choosen: false,
          right: true
        },
        {
          txt: 'C. module_install',
          choosen: false,
          right: false
        },
        {
          txt: 'D. insmod',
          choosen: false,
          right: false
        },
        {
          txt: 'E. loadmod',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 75,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Consider the following output from the command ls -i: 525385 a.txt How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?',
      Answer: [
        {
          txt: 'A. ln -h a.txt c.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'B. ln c.txt a.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'C. ln a.txt c.txt',
          choosen: false,
          right: true
        },
        {
          txt: 'D. ln -f c.txt a.txt',
          choosen: false,
          right: false
        },
        {
          txt: 'E. ln -i 525385 c.txt',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },   
    {
      id: 76,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands installs all packages with a name ending with the string foo?',
      Answer: [
        {
          txt: 'A. zypper get "*foo"',
          choosen: false,
          right: false
        },
        {
          txt: 'B. zypper update "foo?"',
          choosen: false,
          right: false
        },
        {
          txt: 'C. zypper force "foo*"',
          choosen: false,
          right: false
        },
        {
          txt: 'D. zypper install "*foo"',
          choosen: false,
          right: true
        },
        {
          txt: 'E. zypper add ".*foo"',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 77,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands redirects the output of ls to standard error?',
      Answer: [
        {
          txt: 'A. ls >-1',
          choosen: false,
          right: false
        },
        {
          txt: 'B. ls <<ERR',
          choosen: false,
          right: false
        },
        {
          txt: 'C. ls >&2',
          choosen: false,
          right: true
        },
        {
          txt: 'D. ls >>2',
          choosen: false,
          right: false
        },
        {
          txt: 'E. ls |error',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
    {
      id: 78,
      CorrectAnswer:false,
      WrongAnswered:false,
      question: 'Which of the following commands prints a list of usernames (first column) and their primary group(fourth column) from the /etc/passwd file?',
      Answer: [
        {
          txt: 'A. fmt -f 1,4 /etc/passwd',
          choosen: false,
          right: false
        },
        {
          txt: 'B. cut -d : -f 1,4 /etc/passwd',
          choosen: false,
          right: true
        },
        {
          txt: 'C. sort -t : -k 1,4 /etc/passwd',
          choosen: false,
          right: false
        },
        {
          txt: 'D. paste -f 1,4 /etc/passwd',
          choosen: false,
          right: false
        },
        {
          txt: 'E. split -c 1,4 /etc/passwd',
          choosen: false,
          right: false
        },
      ],
      InfoText: 'www.google.de',
      Uebersprungen: false
    },
  ]; 
}

  getAllScQuest() : AllScQuestions[]{
    return this.scquestions
  }
}
