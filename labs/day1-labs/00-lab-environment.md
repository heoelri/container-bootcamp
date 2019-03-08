# Lab Environment

## Classroom Setting

These labs are designed for delivery in a classroom. For these labs we require a Linux-based VM in Azure as a "jumpbox". The first task here is to create this virtual machine and install the required software on it.

Our labs are build and verified using CentOS7. Our recommendations is to use CentOS7. 

### Setup Environment

* **Setup your Jumpbox VM in Azure**
    1. Browse to <http://portal.azure.com>
    1. Click on "Create a resource" and search for "CentOS-based 7.5"
    1. Deploy the CentOS-based 7.5 VM  

         Size: D2s_v3 (Please don't use B-series VMs)

         Publisher: Rogue Wave Software

         NSG Rule: Allow inbound on SSH port (22)

         Public IP: Yes

         Authentication: Provide a strong password or use public-key authentication(recommended) for your Jumpbox because it's accessible publicly.

    1. After the CentOS jumbbox is provisioned in Azure, you can connect to it using SSH (PuTTY or MobaXTerm - or nativly using the "ssh" command in PowerShell)
    **Verify that Auto-Shutdown has been disabled for this VM**
    1. Connect to your newly created jumpbox on the Public IP
    1. Goto [**Jumpbox Setup**](/labs/helper-files/jumpbox-setup.md) to install the required software that you'll need for this training.

* **Setup Azure Cloud Shell:**

    1. Browse to <http://portal.azure.com>
    1. Login with the Azure credentials
    1. Click on the cloud shell icon to start your session.

        ![alt text](img/cloud-shell-start.png "Spektra ready")

    1. Select `Bash (Linux)`
    1. If you are using CloudShell for the first time, you will be prompted to setup storage for your cloud shell. Click `Show advanced settings`

        ![alt text](img/cloud-show-advanced.png "Spektra ready")

    1. Provide a unique value for Storage account name. This must be all lower case and no punctuation. Use "cloudshell" for File share name. See example below.

        ![alt text](img/cloud-storage-config.png "Spektra ready")

    1. Click `Create storage`

    > Note: You can also use the dedicated Azure Cloud Shell URL: <http://shell.azure.com>.

#### [Return to BootCamp Table of Contents (Main Page)](/README.md)
