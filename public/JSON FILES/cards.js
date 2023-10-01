
const game_cards = {
    cards:
        [{
            "id": 1,
            "img": './public/img/um_copo.png',
            "img_front": './public/img/img_frente_verso/um_copo_frente.png',
            "img_back": './public/img/img_frente_verso/um_copo_verso.png',
            "title": "Um copo d'água",
            "story": " Um homem entra em um bar e pede um copo d'água. O barman puxa uma arma de baixo do balcão e aponta para a cabeça do homem, que responde 'obrigado' e sai do bar.",
            "solution": "O homem havia entrado no bar para se livrar de soluços, procurando um copo d'água. O barman, percebendo a situação, saca a arma e aponta-a para o homem, a fim de curá-lo com um susto",
            "read": false
        },
        {
            "id": 2,
            "img": "./public/img/o_ultimo_trem.png",
            "img_front": './public/img/img_frente_verso/o_ultimo_trem_frente.png',
            "img_back": './public/img/img_frente_verso/o_ultimo_trem_verso.png',
            "title": "O último trem",
            "story": "Sebastião estava sentado lendo o jornal quando ouviu um barulho. No momento que percebeu o que havia ocorrido, lamentou por não ter pegado o trem a tempo. Pouco tempo depois, sebastião cometeu suicídio.",
            "solution": "Sebastião estava falido. Ele era um colecionador de trens e, para resolver seus problemas econômicos, pretendia vender o seu mais valioso modelo de trem. Ele estava limpando o trem sobre a mesa, mas não deixou-o posicionado de forma segura.Quando se sentou para descansar e começou a ler seu jornal, ouviu o trem caindo da mesa. Sebastião não teve tempo de pegá-lo antes de cair no chão.",
            "read": false
        },
        {
            "id": 3,
            "img": './public/img/uma_porta_aberta.png',
            "img_front": './public/img/img_frente_verso/uma_porta_aberta_frente.png',
            "img_back": './public/img/img_frente_verso/uma_porta_aberta_verso.png',
            "title": "Uma porta aberta",
            "story": "Quando marcelo acordou naquela manhã, ele estava surpreso que a porta estava aberta. Justo quando Marcelo estava cruzando a porta ele foi decapitado.",
            "solution": "Marcelo era um canário que vivia em sua gaiola. Geraldo, um gato, estava esperando sua oportunidade para pegar Marcelo e comê-lo. Quando seu dono deixou a porta da gaiola aberta por engano, Marcelo voou para fora e Geraldo não hesitou em arrancar a pequena cabeça de Marcelo com uma mordida.",
            "read": true
        },
        {
            "id": 4,
            "img": './public/img/o_acidente.png',
            "img_front": './public/img/img_frente_verso/o_acidente_frente.png',
            "img_back": './public/img/img_frente_verso/o_acidente_verso.png',
            "title": "O acidente",
            "story": "Um homem dirigindo um carro provoca um acidente ao colidir com uma bicicleta, ao virar de inesperado em um cruzamento. Quando os policiais chegam, outro homem é preso. Aquele que estava dirigindo é levado para casa.",
            "solution": "O condutor do carro estava numa aula prática da autoescola e seu instrutor lhe disse para fazer uma curva incorreta em um cruzamento, batendo em uma bicicleta. Os policiais julgaram o instrutor responsável pelo acidente, de modo que o prenderam e levaram o aluno para casa.",
            "read": false
        },
        {
            "id": 5,
            "img": './public/img/testemunha_sequestro.png',
            "img_front": './public/img/img_frente_verso/testemunha_sequestro_frente.png',
            "img_back": './public/img/img_frente_verso/testemunha_sequestro_verso.png',
            "title": "Testemunha de um sequestro",
            "story": "Um empresário testemunha um sequestro. No entanto, quando ele conta à polícia, eles não acreditam nele.",
            "solution": "Depois de sair do dentista, a testemunha foi incapaz de falar adequadamente, já que ele estava com a boca dormente. Os policiais pensavam que o homem estava bêbado e não acreditaram nas suas palavras.",
            "read": false
        },
        {
            "id": 6,
            "img": './public/img/um_roubo.png',
            "img_front": './public/img/img_frente_verso/um_roubo_frente.png',
            "img_back": './public/img/img_frente_verso/um_roubo_verso.png',
            "title": "Um roubo sem solução",
            "story": "Um rapaz vai para a farmácia e rapidamente sai dela com o dinheiro da caixa registradora. O dono da farmácia chama a polícia e, algum tempo depois, um policial recupera o dinheiro e leva o rapaz com ele. Naquela noite, as três pessoas vão à delegacia para relatar um roubo.",
            "solution": "O rapaz era filho do dono da farmácia. Seu carro tinha sido roubado e ele tinha um exame importante. Ele estivera na farmácia para pedir à mãe algum dinheiro para que ele pudesse pegar um táxi. Além disso, a mãe chamou seu marido, que era um policial, e pediu-lhe para levar o filho para o exame. Ele o fez e, como o filho não precisava mais do dinheiro, devolveu-o ao pai, que o devolveu à mãe. Finalmente, toda a família relata o roubo do carro.",
            "read": false
        },
        {
            "id": 7,
            "img": './public/img/doutor.png',
            "img_front": './public/img/img_frente_verso/doutor_frente.png',
            "img_back": './public/img/img_frente_verso/doutor_verso.png',
            "title": "Doutor, doutor",
            "story": "Um homem vai ao médico para saber os resultados de alguns exames. Os resultados não mostram problemas de saúde. No entanto, ele comete suicídio logo após a visita.",
            "solution": "Um homem vai ao médico para saber os resultados de alguns exames. Os resultados não mostram problemas de saúde. No entanto, ele comete suicídio logo após a visita.",
            "read": false
        },
        {
            "id": 8,
            "img": './public/img/perdido.png',
            "img_front": './public/img/img_frente_verso/perdido_frente.png',
            "img_back": './public/img/img_frente_verso/perdido_verso.png',
            "title": "Perdido",
            "story": "João sai em uma viagem com sua bússola. Depois de uma longa caminhada, ele para para comer um sanduíche. Depois disso ele não consegue encontrar o caminho de volta.",
            "solution": "João era um cientista que trabalhava perto do Pólo Norte. Quando andava, caminhou para o norte, e parou para comer seu sanduíche precisamente no Pólo Norte. Quando ele tentou voltar, sua bússola era inútil, já que todas as direções apontavam para o sul.",
            "read": false
        },
        {
            "id": 9,
            "img": './public/img/splish_splash.png',
            "img_front": './public/img/img_frente_verso/splish_splash_frente.png',
            "img_back": './public/img/img_frente_verso/splish_splash_verso.png',
            "title": "Splish, splash!",
            "story": "André estava navegando em seu barco quando seu relógio caiu ao mar. Ele é um ótimo mergulhador, no entanto, não consegue recuperá-lo.",
            "solution": "Ele estava navegando no Mar Morto. Devido à enorme concentração de sal, ele não conseguiu afundar o suficiente para obter o relógio.",
            "read": false
        },
        {
            "id": 10,
            "img": './public/img/um_assassinato.png',
            "img_front": './public/img/img_frente_verso/um_assassinato_frente.png',
            "img_back": './public/img/img_frente_verso/um_assassinato_verso.png',
            "title": "Um assassinato nada surpreendente",
            "story": "Um assassinato ocorre, mas ninguem está surpreso",
            "solution": "Alguns amigos estavam jogando o jogo de tabuleiro Detetive (Clue). Todos esperavam o assassinato, para começar a resolver o mistério.",
            "read": false
        },
        {
            "id": 11,
            "img": './public/img/o_homem_enforcado.png',
            "img_front": './public/img/img_frente_verso/o_homem_enforcado_frente.png',
            "img_back": './public/img/img_frente_verso/o_homem_enforcado_verso.png',
            "title": "O homem enforcado",
            "story": "Em uma sala trancada há um homem pendurado no teto e não há nenhum outro objeto em torno dele.",
            "solution": "O homem queria tirar a própria vida. Não tendo qualquer outro suporte, ele usou um bloco de gelo. Ele chutou o bloco para se enforcar. Após algum tempo, apenas uma pequena poça de água foi deixada.",
            "read": true
        },
        {
            "id": 12,
            "img": './public/img/tarde_demais.png',
            "img_front": './public/img/img_frente_verso/tarde_demais_frente.png',
            "img_back": './public/img/img_frente_verso/tarde_demais_verso.png',
            "title": "Tarde demais",
            "story": "Uma mulher corre pelo corredor mas para de repente, e com lágrimas nos olhos, dá meia volta.",
            "solution": "A mulher era uma advogada que finalmente conseguiu que seu cliente que estava sentenciado à pena de morte, fosse perdoado. Ela estava correndo para a cadeira elétrica a fim de parar a execução mas ao ver as luzes do corredor piscando, ela se deu conta de que era tarde demais.",
            "read": false
        },
        {
            "id": 13,
            "img": './public/img/a_chave_misteriosa.png',
            "img_front": './public/img/img_frente_verso/a_chave_misteriosa_frente.png',
            "img_back": './public/img/img_frente_verso/a_chave_misteriosa_verso.png',
            "title": "A chave misteriosa",
            "story": "Todas as noites antes de dormir, Isabel tranca a porta de sua casa e prende a chave em uma corda.",
            "solution": "Isabel era sonâmbula e algumas noites antes, ela saiu de casa durante a madrugada sem se dar conta. Para impedir que isso ocorresse novamente, todas as noites ela amarrava a chave a uma corda com um sino. Caso tentasse sair de casa, seu marido seria acordado e a levaria novamente para a cama.",
            "read": false
        },
        {
            "id": 14,
            "img": './public/img/ilha_tesouro.png',
            "img_front": './public/img/img_frente_verso/ilha_tesouro_frente.png',
            "img_back": './public/img/img_frente_verso/ilha_tesouro_verso.png',
            "title": "Ilha do tesouro",
            "story": "Isabel era sonâmbula e algumas noites antes, ela saiu de casa durante a madrugada sem se dar conta. Para impedir que isso ocorresse novamente, todas as noites ela amarrava a chave a uma corda com um sino. Caso tentasse sair de casa, seu marido seria acordado e a levaria novamente para a cama.",
            "solution": "O pirata cavou aproximadamente 3 metros e enterrou 90% de seu tesouro, cobrindo-o de areia até que o buraco ficasse com somente 1 metro de profundidade, onde enterrou os 10% restantes, cobrindo tudo com mais areia. O tesouro era tamanho que mesmo os 10% eram uma fortuna, então o rival não suspeitaria quanto a existência de algo mais. E uma vez que se espalhasse a notícia de que o tesouro havia sido encontrado, ninguém voltaria a procura-lo.",
            "read": false
        },
        {
            "id": 15,
            "img": './public/img/batida.png',
            "img_front": './public/img/img_frente_verso/batida_frente.png',
            "img_back": './public/img/img_frente_verso/batida_verso.png',
            "title": "Batida!",
            "story": "Uma mulher atinge o para-brisa de um veículo que seguia pela rua e cai no chão. O motorista chama a polícia. Ao chegar, o policial cuida da vítima e a leva presa.",
            "solution": "A mulher havia se jogado no para-brisa do carro, que estava em baixa velocidade, com a intenção de receber uma indenização da companhia de seguros do motorista. Seu plano não funcionou porque o carro possuía uma câmera de segurança que filmou sua ação.",
            "read": false
        },
        {
            "id": 16,
            "img": './public/img/banho_de_manhã.png',
            "img_front": './public/img/img_frente_verso/banho_de_manhã_frente.png',
            "img_back": './public/img/img_frente_verso/banho_de_manhã_verso.png',
            "title": "Banho de manhã",
            "story": "Todos os dias, Diana acorda, toma banho, toma seu café da manhã e vai para o trabalho. Um dia, ela fez tudo como sempre, mas quando seu chefe a viu, ele disse: Você deveria acordar mais cedo.",
            "solution": "Naquele dia, ela acordou um pouco mais tarde e, estando com pressa, não teve tempo de secar o cabelo adequadamente. Seu chefe notou que ainda estava molhado.",
            "read": false
        },
        {
            "id": 17,
            "img": './public/img/uma_voz.png',
            "img_front": './public/img/img_frente_verso/uma_voz_frente.png',
            "img_back": './public/img/img_frente_verso/uma_voz_verso.png',
            "title": "Uma voz extremamente familiar",
            "story": "Enquanto um caixão é baixado para a sepultura no funeral de um homem, os participantes começam a ouvir o homem morto gritando e batendo na tampa do caixão. No entanto, eles não levantam o caixão nem o abrem.",
            "solution": "O homem estava gravemente doente e sabia que morreria em breve. Ele decidiu fazer uma gravação de si mesmo fingindo estar preso no caixão para fazer uma última piada para todos em seu enterro. Ele entregou a gravação a um de seus filhos para tocar no sistema de som enquanto o caixão era baixado.",
            "read": false
        },
        {
            "id": 18,
            "img": './public/img/uma_surpresa.png',
            "img_front": './public/img/img_frente_verso/uma_surpresa_frente.png',
            "img_back": './public/img/img_frente_verso/uma_surpresa_verso.png',
            "title": "Uma surpresa de natal",
            "story": "Um homem decide fazer uma surpresa para a sua família no Natal. Alguns dias depois, sua família decide vender a casa e ir morar longe.",
            "solution": "O homem decidiu descer pela chaminé vestido de Papai Noel, mas ficou preso. Não sabendo que ele estava lá e ansiosos para afastar o frio, sua família acendeu a chaminé. O som do fogo cobriu os pedidos de ajuda do homem e ele acabou sufocando. Depois de algum tempo, sua familia o encontrou. Eles não queriam continuar morando na casa onde ele havia morrido, então decidiram vender a casa e ir morar em outro lugar.",
            "read": false
        },
        {
            "id": 19,
            "img": './public/img/pare.png',
            "img_front": './public/img/img_frente_verso/pare_frente.png',
            "img_back": './public/img/img_frente_verso/pare_verso.png',
            "title": "Pare",
            "story": "A decisão de Gabriela de parar de se mover salvou sua vida.",
            "solution": "Gabriela estava em um pântano e se viu presa em uma areia movediça. Ela se moveu devagar para poder esperar até que alguém a resgatasse.",
            "read": false
        },
        {
            "id": 20,
            "img": './public/img/o_papel.png',
            "img_front": './public/img/img_frente_verso/o_papel_frente.png',
            "img_back": './public/img/img_frente_verso/o_papel_verso.png',
            "title": "O papel",
            "story": "Uma mulher caminha pela selva, vê uma pedra e percebe que há uma folha de papel em branco sobre ela. Ela se deita e chora.",
            "solution": "Era sua folha de papel. Ela o havia deixado para trás enquanto vagava pela selva. Quando ela viu, percebeu que estava perdida e provavelmente nunca encontraria o caminho para sair de lá.",
            "read": false
        },
        ]
};
