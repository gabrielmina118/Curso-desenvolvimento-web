import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    min-height: 100px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Foto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 16px;
`;

export const Nome = styled.h2`
    font-size: 24px;
    margin: 8px 0;
`;

export const SobreNome = styled.h3`
    font-size: 18px;
    color: #555;
    margin: 4px 0;
`;

export const Email = styled.p`
    font-size: 16px;
    color: #777;
`;
