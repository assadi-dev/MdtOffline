import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditPencilIcon, TrashIcon } from "../../../components/SVG";
import { get_allChefAccusations } from "../../../redux/actions/ChefAccusation.action";
import {
  Button,
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../Ressources.styled";
import {
  ChefAccusationBody,
  ChefAccusationWrapper,
} from "./ChefAccusation.styled";
import { getAllChefAccusationAsync } from "../../../features/ChefAccusation/ChefAccusationAsyncApi";
import LoadingTab from "../../CommandStaffSupervisor/Loading/LoadingTab";
import TbodyAnimate from "../../../components/Shared/Table/TbodyAnimate";

const ChefAccusation = () => {
  const { collections, filtered, status } = useSelector(
    (state) => state.ChefAccusationReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(getAllChefAccusationAsync());

    return () => {
      promise.abort();
    };
  }, []);

  return (
    <>
      <ChefAccusationWrapper>
        <HeaderRowAction>
          {" "}
          <div></div>
          <Button className="addBtn">Ajouter</Button>{" "}
        </HeaderRowAction>
        <ChefAccusationBody>
          {status == "complete" ? (
            <Table>
              <thead>
                <tr>
                  <th>Infractions</th>
                  <th>Categorie</th>
                  <th className="td-center">Amendes</th>
                  <th className="td-center">Peines</th>
                  <th>Action</th>
                </tr>
              </thead>
              <TbodyAnimate>
                {collections.length > 0 &&
                  collections.map((chef) => (
                    <tr key={chef.id}>
                      <td>{chef.infraction}</td>
                      <td>{chef.categorie}</td>
                      <td className="td-center">{chef.amendes}</td>
                      <td className="td-center">{chef.peines}</td>

                      <td>
                        <TableAction>
                          <OutlineBtnAction className="edit">
                            <EditPencilIcon />
                          </OutlineBtnAction>
                          <OutlineBtnAction className="delete">
                            <TrashIcon />
                          </OutlineBtnAction>
                        </TableAction>
                      </td>
                    </tr>
                  ))}
              </TbodyAnimate>
            </Table>
          ) : (
            <LoadingTab />
          )}
        </ChefAccusationBody>
      </ChefAccusationWrapper>
    </>
  );
};

export default ChefAccusation;
