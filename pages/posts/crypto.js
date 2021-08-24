import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import crypto from '../../public/crypto.png'
import Image from 'next/image'
import { ButtonGroup } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open5, setOpen5] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose = () => {
    setOpen5(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };

  return (
    <>
    <div className="center">
      <h3 className="center"> My CryptoCurrency Portfolio </h3>
      <p> I first invested in Cryptocurrency in 2016 at the age of 18. I believed Cryptocurrency would gain significant headway in years to come and 
        still believe it has ways to go. Below are 5 Cryptocurrencys that make up my current portfolio and which i believe to be market leaders 
        for years to come. Click below to learn more</p>
    </div>
    <div className="test">
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button size="large" variant="outlined" color="primary" onClick={handleClickOpen1}>
        NEO
      </Button>
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"NEO"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Neo (formerly Antshares) is an open-source decentralized blockchain decentralized application platform founded in 2014 by Da HongFei and Erik Zhang. Since its rebranding to Neo from Antshares in 2017, the project&apos;s vision is to realize a &quot;smart economy&quot; by utilizing blockchain technology and smart contracts to issue and manage digitized assets.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="https://neo.org/" target="_blank" color="primary">
            Website
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Button size="large" variant="outlined" color="primary" onClick={handleClickOpen2}>
        Ethereum
      </Button>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Ethereum"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Ethereum is open access to digital money and data-friendly services for everyone – no matter your background or location. It&apos;s a community-built technology behind the cryptocurrency ether (ETH) and thousands of applications you can use today.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="https://ethereum.org/en/" target="_blank" color="primary">
            Website
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Button size="large" variant="outlined" color="primary" onClick={handleClickOpen3}>
        Bitcoin
      </Button>
      <Dialog
        open={open3}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Bitcoin"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="https://www.bitcoin.com/" target="_blank" color="primary">
            Website
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Button size="large" variant="outlined" color="primary" onClick={handleClickOpen4}>
        Cardano
      </Button>
      <Dialog
        open={open4}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Cardano"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods. It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.
          With a leading team of engineers, Cardano exists to redistribute power from unaccountable structures to the margins – to individuals – and be an enabling force for positive change and progress.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="https://cardano.org/" target="_blank" color="primary">
            Website
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Button size="large" fullWidth="true" variant="outlined" color="primary" onClick={handleClickOpen5}>
        ZRX
      </Button>
      <Dialog
        open={open5}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"ZRX"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          0x is important infrastructure for the emerging crypto economy and enables markets to be created that couldn&apos;t have existed before. As more assets become tokenized, public blockchains provide the opportunity to establish a new financial stack that is more efficient, transparent, and equitable than any system in the past.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="https://0x.org/" target="_blank" color="primary">
            Website
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </ButtonGroup>
    </div>

    
    <div className="center">
      <Image variant="outlined" src={crypto} alt="crypto"/>
    </div>
    </>
  );
}
