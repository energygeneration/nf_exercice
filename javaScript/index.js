function CalculerMontantTTC()
    {
    if (isNaN(Form1.ht.value) == true)
    {
    alert('Merci de saisir un montant correct. Calcul impossible.');
    Form1.ht.value = '0';
    }
    else
    {
    Form1.tva.value = (Form1.ht.value / 100) * 19.6 ;
    Form1.ttc.value = Number(Form1.ht.value) + Number(Form1.tva.value) ;
    }
    }