function rechazar(id)
{
    db.collection("nuevasEmpresas").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}