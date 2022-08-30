$(document).ready(function(){

    $('.btn').click(function(e){
        e.preventDefault()

        let dado = $('#CEP').val()
        
        let url = `https://viacep.com.br/ws/${dado}/json/`

        console.log(url)

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            assync: true,
            url: url,
            success: function(dado){
                $('#LOGRADOURO').val(dado.logradouro)
                $('#BAIRRO').val(dado.bairro)
                $('#LOCALIDADE').val(dado.localidade)
                $('#UF').val(dado.uf)
                console.log(dado)
            }
            
        })
    })
    
})