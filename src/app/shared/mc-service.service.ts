import { Injectable } from '@angular/core';
import { AllMcquestion} from './all-mcquestions';
import { Answer } from './all-mcquestions';

@Injectable({
  providedIn: 'root'
})
export class McServiceService {
  mcquestions : AllMcquestion[];

  constructor() { 
    this.mcquestions = [
      {
        id: 1,
        question: `Consider the following directory: \n  drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales.\n Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)`,
        allAnswer: [
          {
            txt: 'A. chmod g+s sales',
            choosen : false,
            right : true
          },
          {
            txt : 'B. setpol -R newgroup=sales sales',
            choosen : false,
            right : false
          },
          {
            txt : 'C. chgrp -p sales sales',
            choosen : false,
            right : false
          },
          {
            txt : 'D. chown --persistent *.sales sales',
            choosen : false,
            right : false
          },
          {
            txt : 'E. chmod 2775 sales',
            choosen : false,
            right : true
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 2,
        question: 'In order to display all currently mounted filesystems, which of the following commands could be used?(Choose two.)',
        allAnswer: [
          {
            txt: 'A. cat /proc/self/mounts',
            choosen: false,
            right: true,
          },
          {
            txt: 'B. free',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. lsmounts',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. mount',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. cat /proc/filesystems',
            choosen: false,
            right: false,
          },

        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 3,
        question: 'Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. Some parts of the boot process can be configured from the BIOS',
            choosen: false,
            right: true,
          },
          {
            txt: 'B. Linux does not require the assistance of the BIOS to boot a computer',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. The BIOS boot process starts only if secondary storage, such as the hard disk, is functional',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. The BIOS initiates the boot process after turning the computer on ',
            choosen: false,
            right: true,
          },
          {
            txt: 'E  The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk',
            choosen: false,
            right:false,
          },
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 4,
        question: 'What is true regarding UEFI firmware? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. It can read and interpret partition tables',
            choosen: false,
            right: true,
          },
          {
            txt: 'B. It can use and read certain file systems',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. It stores its entire configuration on the /boot/ partition',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. It is stored in a special area within the GPT metadata',
            choosen: false,
            right: false,
          },
          {
            txt:  'E. It is loaded from a fixed boot disk position',
            choosen: false,
            right:false,
          },
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 5,
        question: 'When is the content of the kernel ring buffer reset? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. When the ring buffer is explicitly reset using the command dmesg --clear',
            choosen: false,
            right: true,
          },
          {
            txt: 'B. When the ring buffer is read using dmesg without any additional parameters',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. When a configurable amount of time, 15 minutes by default, has passed',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. When the kernel loads a previously unloaded kernel module',
            choosen: false,
            right: false,
          },
          {
            txt:  'E. When the system is shut down or rebooted',
            choosen: false,
            right:true,
          },
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 6,
        question: 'Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. ~/.lib64/',
            choosen: false,
            right: false,
          },
          {
            txt: 'B. When the ring buffer is read using dmesg without any additional parameters',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. /var/lib64/',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. /lib64/',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. /opt/lib64/',
            choosen: false,
            right:false,
          },
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 7,
        question: 'Which of the following files exist in a standard GRUB 2 installation? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. /boot/grub/stages/stage0',
            choosen: false,
            right: false,
          },
          {
            txt: 'B. /boot/grub/i386-pc/lvm.mod',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. /boot/grub/fstab',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. /boot/grub/grub.cfg',
            choosen: false,
            right: true,
          },
          {
            txt:  'E. /boot/grub/linux/vmlinuz',
            choosen: false,
            right:false,
          },
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 8,
        question: 'Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. The partitioning scheme',
            choosen: false,
            right: false,
          },
          {
            txt:  'B. The file system',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. The D-Bus Machine ID',
            choosen: false,
            right: true,
          },
          {
            txt:  'D. The permissions of /root/',
            choosen: false,
            right: false,
          },
          {
            txt:  'E. The SSH host keys',
            choosen: false,
            right:true,
          },
        ],
        infoText: 'www.google.de',
        uebersprungen: false

      },
      {
        id: 9,
        question: 'What is true regarding the configuration of yum? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. Changes to the repository configuration become active after running yum confupdate',
            choosen: false,
            right: false,
          },
          {
            txt:  'B. Changes to the yum configuration become active after restarting the yumd service',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. The configuration of package repositories can be divided into multiple files',
            choosen: false,
            right: true,
          },
          {
            txt:  'D. Repository configurations can include variables such as $basearch or $releasever',
            choosen: false,
            right: true,
          },
          {
            txt:  'E. In case /etc/yum.repos.d/ contains files, /etc/yum.config ignored',
            choosen: false,
            right:false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 10,
        question: 'Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. find /tmp -user root -print',
            choosen: false,
            right: true
          },
          {
            txt:  'B. find -path /tmp -uid root',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. find /tmp -uid root -print',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. find /tmp -user root',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. find -path /tmp -user root -print',
            choosen: false,
            right:false,
          }
        ],
        infoText: 'www.google.de',    
        uebersprungen: false
      },
      {
        id: 11,
        question: 'Which of the following are valid stream redirection operators within Bash? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. < ',
            choosen: false,
            right: true
          },
          {
            txt:  'B. #>',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. %>',
            choosen: false,
            right: false,
          },
          {
            txt:   'D. >>>',
            choosen: false,
            right: false,
          },
          {
            txt: 'E. 2>&1',
            choosen: false,
            right:true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 12,
        question: 'From a Bash shell, which of the following commands directly execute the instructions from the file/usr/local/bin/runme.sh without starting a subshell? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. source /usr/local/bin/runme.sh',
            choosen: false,
            right: true
          },
          {
            txt:  'B. /usr/local/bin/runme.sh',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. /bin/bash /usr/local/bin/runme.sh',
            choosen: false,
            right: false,
          },
          {
            txt:   'D. .  /usr/local/bin/runme.sh',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. run /usr/local/bin/runme.sh',
            choosen: false,
            right:false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 13,
        question: 'Which of the following commands can be used to determine how long the system has been running? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. uptime',
            choosen: false,
            right: true
          },
          {
            txt:  'B. up',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. time --up',
            choosen: false,
            right: false,
          },
          {
            txt:    'D. uname -u',
            choosen: false,
            right: false,
          },
          {
            txt: 'E. top',
            choosen: false,
            right:true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 14,
        question: 'Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2',
        allAnswer: [
          {
            txt: 'A. ttyS[1-5]',
            choosen: false,
            right: false
          },
          {
            txt: 'B. tty?[0-5]',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. tty*2',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. tty[A-Z][012]',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. tty[Ss][02]]',
            choosen: false,
            right:false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 15,
        question: 'Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used toidentify the intended partition? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. LABEL',
            choosen: false,
            right: true
          },
          {
            txt: 'B. ID',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. FIND',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. NAME',
            choosen: false,
            right: false,
          },
          {
            txt: 'E. UUID',
            choosen: false,
            right:true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 16,
        question: 'Which of the following files are found in the /boot/ filesystem? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. Linux kernel images',
            choosen: false,
            right: true
          },
          {
            txt: 'B. Bash shell binaries',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. systemd target and service units',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. Initial ramdisk images',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. fsck binaries',
            choosen: false,
            right:false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 17,
        question: 'Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? (Choose three.)',
        allAnswer: [
          {
            txt: 'A. Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.',
            choosen: false,
            right: true
          },
          {
            txt: 'B. Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.',
            choosen: false,
            right: true,
          },
          {
            txt:  'D. The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.',
            choosen: false,
            right: false,
          },
          {
            txt: 'E. Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution.',
            choosen: false,
            right:false,
          }
        ],
          infoText: 'www.google.de',
          uebersprungen: false
      },
      {
        id: 18,
        question: 'Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. menuentry',
            choosen: false,
            right: true
          },
          {
            txt: 'B. uefi',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. pxe-ifconfig',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. insmod',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. kpartx',
            choosen: false,
            right:false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 19,
        question: 'What can the Logical Volume Manager (LVM) be used for? (Choose three.)',
        allAnswer: [
          {
            txt: 'A. To create snapshots.',
            choosen: false,
            right: true
          },
          {
            txt: 'B. To dynamically change the size of logical volumes.',
            choosen: false,
            right: true,
          },
          {
            txt:  'C. To dynamically create or delete logical volumes.',
            choosen: false,
            right: true,
          },
          {
            txt: 'D. To create RAID 9 arrays.',
            choosen: false,
            right: false,
          },
          {
            txt:  'E. To encrypt logical volumes.',
            choosen: false,
            right:false,
          }
        ],
        infoText: 'www.google.de',        
        uebersprungen: false
      },
      {
        id: 20,
        question: 'What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.',
            choosen: false,
            right: false
          },
          {
            txt:  'B. By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.',
            choosen: false,
            right: true,
          },
          {
            txt:  'E. Both GPT and MBR support up to four primary partitions, each with up to 4096 TB.',
            choosen: false,
            right:false,
          }
        ],
         infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 21,
        question: 'A backup software heavily uses hard links between files which have not been changed in between two backup runs. Which benefits are realized due to these hard links? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.',
            choosen: false,
            right: false
          },
          {
            txt:   'B. The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.',
            choosen: false,
            right: true,
          },
          {
            txt:  'E. The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data.',
            choosen: false,
            right: true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 22,
        question: 'Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.',
            choosen: false,
            right: true
          },
          {
            txt:    'B. filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. filea.txt has the sticky bit set and a regular user cannot remove this permission.',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.',
            choosen: false,
            right: false,
          },
          {
            txt:  'E. filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file.',
            choosen: false,
            right: false,
          }
        ],
        infoText: 'www.google.de',        
        uebersprungen: false
      },
      {
        id: 23,
        question: 'Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. JFS',
            choosen: false,
            right: false
          },
          {
            txt:    'B. ext3',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. XFS',
            choosen: false,
            right: false,
          },
          {
            txt:  'D. ext2',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. procfs',
            choosen: false,
            right: false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 24,
        question: 'Which of the following commands can be used to display the inode number of a given file? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. inode',
            choosen: false,
            right: false
          },
          {
            txt: 'B. ln',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. ls',
            choosen: false,
            right: true,
          },
          {
            txt:  'D. cp',
            choosen: false,
            right: false,
          },
          {
            txt:  'E. stat',
            choosen: false,
            right: true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 25,
        question: 'Which of the following commands display the IDs of all processes owned by root? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. pgrep -c root',
            choosen: false,
            right: false
          },
          {
            txt:  'B. pgrep -u root',
            choosen: false,
            right: true,
          },
          {
            txt: 'C. pgrep -f root',
            choosen: false,
            right: false,
          },
          {
            txt:'D. pgrep -U 0',
            choosen: false,
            right: true,
          },
          {
            txt: 'E. pgrep -c 0',
            choosen: false,
            right: false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false

      },
      {
        id: 26,
        question: 'Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose two.),',
        allAnswer: [
          {
            txt: 'A. Ctrl XX',
            choosen: false,
            right: false
          },
          {
            txt: 'B. Ctrl :W',
            choosen: false,
            right: false,
          },
          {
            txt:  'C. Esc zz',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. Esc :wq',
            choosen: false,
            right: true,
          },
          {
            txt:  'E. Esc ZZ',
            choosen: false,
            right: true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 27,
        question: 'Which of the following tools can show the complete path of an executable file that the current shell would execute when starting a command without specifying its complete path? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. find',
            choosen: false,
            right: false
          },
          {
            txt:  'B. pwd',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. which',
            choosen: false,
            right: true,
          },
          {
            txt:  'D. locate',
            choosen: false,
            right: false,
          },
          {
            txt: 'E. type',
            choosen: false,
            right: true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 28,
        question: 'Which of the following commands print the current working directory when using a Bash shell? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. echo "${PWD}"',
            choosen: false,
            right: true
          },
          {
            txt: 'B. echo "${WD}"',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. printwd',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. pwd',
            choosen: false,
            right: true,
          },
          {
            txt:'E. echo "${pwd}"',
            choosen: false,
            right: false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 29,
        question: 'Which of the following statements are correct about the initial RAM disk involved in the boot process of Linux? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. An initramfs is a compressed file system archive, which can be unpacked to examine its contents.',
            choosen: false,
            right: true
          },
          {
            txt: 'B. An initramfs file contains the MBR, the bootloader and the Linux kernel.',
            choosen: false,
            right: false,
          },
          {
            txt:  'C. After a successful boot, the initramfs contents are available in /run/initramfs/.',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. The kernel uses the initramfs temporarily before accessing the real root file system.',
            choosen: false,
            right: true,
          },
          {
            txt:  'E. An initramfs does not depend on a specific kernel version and is not changed after the initial installation.',
            choosen: false,
            right: false,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 30,
        question: 'Given the following two symbolic links in a System V init configuration: /etc/rc1.d/K01apache2 /etc/rc2.d/S02apache2 When are the scripts executed that are referenced by these links? (Choose two.)',
        allAnswer: [
          {
            txt: 'A. S02apache2 is run when runlevel 2 is entered.',
            choosen: false,
            right: true
          },
          {
            txt:  'B. S02apache2 is run when runlevel 2 is left.',
            choosen: false,
            right: false,
          },
          {
            txt: 'C. K01apache2 is never run because K indicates a deactivated service.',
            choosen: false,
            right: false,
          },
          {
            txt: 'D. Both S02apache2 and K01apache2 are run during a system shutdown.',
            choosen: false,
            right: false,
          },
          {
            txt:  'E. K01apache2 is run when runlevel 1 is entered.',
            choosen: false,
            right: true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      },
      {
        id: 31,
        question: 'What information can the lspci command display about the system hardware? (Choose three.)',
        allAnswer: [
          {
            txt: 'A. System battery type',
            choosen: false,
            right: false
          },
          {
            txt: 'B. Device IRQ settings',
            choosen: false,
            right: true,
          },
          {
            txt:  'C. PCI bus speed',
            choosen: false,
            right: true,
          },
          {
            txt: 'D. Ethernet MAC address',
            choosen: false,
            right: false,
          },
          {
            txt: 'E. Device vendor identification',
            choosen: false,
            right: true,
          }
        ],
        infoText: 'www.google.de',
        uebersprungen: false
      }
    ]

  }
  getAllMcQuest() : AllMcquestion[]{
    return this.mcquestions
  }
}
